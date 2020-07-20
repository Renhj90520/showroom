import { Component, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import ExteriorScene from '../exterior-scene';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ResourceManager } from '../resource-manager';
import Water from '../water';
import MaterialManager from '../MaterialManager';
import { configurables } from '../configurables';
@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.less'],
})
export class StageComponent implements OnInit {
  @ViewChild('stage', { static: true }) stageEl;

  width;
  height;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;

  scenes = [];

  clock = new THREE.Clock();
  exterioScene: ExteriorScene;
  controls: OrbitControls;
  resourceManager: ResourceManager;
  water: any;
  materialManager: MaterialManager;
  constructor() {}

  ngOnInit(): void {
    this.initRenderer();

    this.resourceManager = new ResourceManager();
    this.resourceManager.load(() => {
      this.initExteriorScene();
      // this.initMaterialManager();
      this.initPool();
      this.camera = this.exterioScene.cameras[0];
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.update();
    });
  }
  initMaterialManager() {
    this.materialManager = new MaterialManager({
      scenes: this.scenes,
      configurables: configurables,
    });
  }
  initPool() {
    this.water = new Water(
      {
        camera: this.camera,
        renderer: this.renderer,
        object: this.exterioScene.getObjectByName('pool_water'),
        transparent: true,
        opacity: 0.6,
      },
      this.resourceManager
    );
    this.exterioScene.add(this.water);
  }
  update() {
    const t = {
      delta: this.clock.getDelta(),
      elapsed: this.clock.getElapsedTime(),
    };
    this.water.update(t);
    this.controls.update();
    this.renderer.render(this.exterioScene, this.exterioScene.cameras[0]);
    requestAnimationFrame(this.update.bind(this));
  }
  initExteriorScene() {
    this.exterioScene = new ExteriorScene(
      this.width,
      this.height,
      this.resourceManager
    );
    this.scenes.push(this.exterioScene);
  }

  initRenderer() {
    this.width = this.stageEl.nativeElement.clientWidth;
    this.height = this.stageEl.nativeElement.clientHeight;
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x000000);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.stageEl.nativeElement.appendChild(this.renderer.domElement);
  }
}
