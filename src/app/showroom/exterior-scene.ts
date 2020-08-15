import * as THREE from 'three';
import { ResourceManager } from './resource-manager';
export default class ExteriorScene extends THREE.Scene {
  width;
  height;
  cameras = [];
  meshes: any = [
    {
      uuid: '894051E4-5885-411E-8A17-5BE4750089BF',
      name: 'glasses_merged',
      position: new THREE.Vector3(0, 0, 0),
      material: '145961B8-30F6-411A-BC91-AE544EED3334',
    },
    {
      uuid: '92208585-35D3-438A-89C0-B834D3B26076',
      name: 'transat_merged',
      position: new THREE.Vector3(0, 0, 0),
      material: '6B7FAA4B-4BEE-452A-960D-CF9653D81C38',
    },
    {
      uuid: '1C260299-607E-4ADF-8187-CF5F5221848F',
      name: 'railings_merged',
      position: new THREE.Vector3(0, 0, 0),
      material: '49B3467D-B550-400F-BBA4-0CE003D95858',
    },
    {
      uuid: '0824BCC7-3AF3-43D0-BF47-27A201FE8CBE',
      name: 'left_walls_merged',
      position: new THREE.Vector3(0, 0, 0),
      material: 'D98539F8-F884-493E-8A16-599624AC3326',
    },
    {
      uuid: '7F214C00-829F-4423-951F-FF8F6CC39D0A',
      name: 'windows_merged',
      position: new THREE.Vector3(0, 0, 0),
      material: '72383E16-4048-421F-842E-D200F106CE94',
    },
    {
      uuid: '6BEF0AD0-9D12-4539-9C52-FC6D4C15D4F2',
      name: 'right_walls_merged',
      position: new THREE.Vector3(0, 0, 0),
      material: 'D98539F8-F884-493E-8A16-599624AC3326',
    },
    {
      name: 'plant_block',
      type: 'Object3D',
      position: new THREE.Vector3(12.553, 0.523, 1.22),
      scale: new THREE.Vector3(100, 100, 100),
      rotation: new THREE.Euler(1.57, 0, 0),
      children: [
        {
          uuid: '21AE0C66-2162-46C6-9F0D-BA2CD7D12BED',
          name: 'plant_pot',
          position: new THREE.Vector3(
            0.00138894073,
            -0.00156385894,
            -0.00197927048
          ),
          rotation: new THREE.Euler(-1.57, 0, 0),
          material: '81F6851E-6EF2-48F6-916D-E9E5750B1F4E',
        },
        {
          uuid: '7BAB12B2-BFEA-462B-B8A0-D18702AF0950',
          name: 'Sansevieria.003',
          position: new THREE.Vector3(
            0.001670847,
            0.0132858846,
            -0.00353334052
          ),
          rotation: new THREE.Euler(
            -1.57,
            1.5552580223430468,
            0.000009531226103079504
          ),
          scale: new THREE.Vector3(
            0.020233212474596224,
            0.020233212000000226,
            0.020233212474596356
          ),
          material: '52188000-202C-480E-A9D3-FD2F0BBF3ECF',
        },
      ],
    },
    {
      name: 'exterior',
      type: 'Object3D',
      position: new THREE.Vector3(0, 0, 0),
      children: [
        {
          uuid: '45EE2001-E129-402E-8624-9D1EC077CC4A',
          name: 'beams',
          position: new THREE.Vector3(15.57096, 2.91222334, 6.918586),
          scale: new THREE.Vector3(100, 100, 65.45959470000086),
          rotation: new THREE.Euler(-1.6292068220007648e-7, 0, 0),
          material: 'F9FDE2B8-2645-4343-9163-427F8E1252F0',
        },
        {
          uuid: 'F62523DB-D182-4D9D-BBCE-63D6F5F44153',
          name: 'beams2',
          position: new THREE.Vector3(0.00655017234, 0, 0),
          scale: new THREE.Vector3(100, 100, 100),
          rotation: new THREE.Euler(-1.6292067799999857e-7, 0, 0),
          material: 'F9FDE2B8-2645-4343-9163-427F8E1252F0',
        },
        {
          uuid: '5E7587B0-0F7C-456C-BFA4-4651D9CB353F',
          name: 'ground',
          position: new THREE.Vector3(0, 0, 0),
          scale: new THREE.Vector3(100, 100, 100),
          rotation: new THREE.Euler(-1.6292067799999857e-7, 0, 0),
          material: '6BECF3F6-BA4F-4E45-9B2D-B4BD538CF764',
        },
        {
          uuid: 'F11D3DBB-B856-4DB2-9AD5-3952EA9F4CB5',
          name: 'house_part2.001',
          position: new THREE.Vector3(0, 0, 0),
          scale: new THREE.Vector3(100, 100, 100),
          rotation: new THREE.Euler(1.5707964460041988, 0, 0),
          material: '560C975B-A961-48A9-8B90-5120E15E33E2',
        },
        {
          uuid: '6B38999E-A719-49E7-8F6A-E8975045BAD8',
          name: 'house_part5',
          position: new THREE.Vector3(0, 0, 0),
          scale: new THREE.Vector3(100, 100, 100),
          rotation: new THREE.Euler(-1.6292067799999857e-7, 0, 0),
          material: '560C975B-A961-48A9-8B90-5120E15E33E2',
        },
        {
          uuid: '1D037CD9-3246-4042-B8B6-3600556C12E1',
          name: 'planks',
          position: new THREE.Vector3(0, 0.0311097279, -0.025431646),
          scale: new THREE.Vector3(100, 100, 100),
          rotation: new THREE.Euler(-1.6292067799999857e-7, 0, 0),
          material: 'F9A28276-907B-4392-8061-C1DFDD702257',
        },
        {
          uuid: '83EA3A0C-0B70-4565-B1AB-845E328F29F9',
          name: 'pool_walls',
          position: new THREE.Vector3(0, 0, 0),
          scale: new THREE.Vector3(100, 100, 100),
          rotation: new THREE.Euler(-1.6292067799999857e-7, 0, 0),
          material: '7B4D11A5-8F34-4646-88BA-DEB79AB16CD2',
        },
      ],
    },
    {
      uuid: 'EFF0C7B3-EA3A-4CF0-835D-022C3B876CD9',
      name: 'pool_water',
      position: new THREE.Vector3(4.97, -0.26, 14.17),
      scale: new THREE.Vector3(7.149575, 10.192703200000073, 6.538787000000047),
      rotation: new THREE.Euler(-1.5707964460041695, 0, 0),
      material: '6356EC50-A162-498F-AA7D-90B20E8BA72F',
    },
    {
      name: 'plant_block (1)',
      type: 'Object3D',
      position: new THREE.Vector3(-6.771, 0.52, 6.581),
      rotation: new THREE.Euler(1.5714770118689059, 0, -Math.PI),
      scale: new THREE.Vector3(100, 100, 100),
      children: [
        {
          uuid: '14C5888D-FF58-4C30-A4FD-11A05F04FE5F',
          name: 'plant_pot',
          position: new THREE.Vector3(
            0.00138894073,
            -0.00156385894,
            -0.00197927048
          ),
          scale: new THREE.Vector3(1, 0.9999999400000071, 0.9999999400000071),
          rotation: new THREE.Euler(-1.5707964460041939, 0, 0),
          material: '81F6851E-6EF2-48F6-916D-E9E5750B1F4E',
        },
        {
          uuid: '3D86EE0A-6E08-42BB-A4DD-A235CA6FC7CB',
          name: 'Sansevieria.003',
          position: new THREE.Vector3(
            0.001670847,
            0.0132858846,
            -0.00353334052
          ),
          scale: new THREE.Vector3(
            0.020233212474596224,
            0.020233212000000226,
            0.020233212474596356
          ),
          rotation: new THREE.Euler(
            -1.5708057702106142,
            1.5552580223430468,
            0.000009531226103079504
          ),
          material: '52188000-202C-480E-A9D3-FD2F0BBF3ECF',
        },
      ],
    },
  ];
  resourceManager: ResourceManager;
  materials = {};

  constructor(width, height, resourceManager) {
    super();
    this.width = width;
    this.height = height;
    this.resourceManager = resourceManager;
    this.initCameras();

    const axesHelper = new THREE.AxesHelper(200);
    // this.add(axesHelper);

    this.addDirLight();
    this.addMeshes();
    console.log(this);
  }
  addDirLight() {
    const light = new THREE.DirectionalLight(0xfffff5);
    light.name = 'Directional Light';
    light.position.set(
      0.5917521025306018,
      0.46445562905234217,
      0.6588705622443649
    );
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    this.add(light);
  }
  addMeshes() {
    this.meshes.forEach((meshInfo) => {
      if (meshInfo.type === 'Object3D') {
        const obj3d = new THREE.Object3D();
        obj3d.name = meshInfo.name;
        obj3d.position.copy(meshInfo.position);
        if (meshInfo.rotation) {
          obj3d.rotation.copy(meshInfo.rotation);
        }
        if (meshInfo.scale) {
          obj3d.scale.copy(meshInfo.scale);
        }
        this.add(obj3d);
        meshInfo.children.forEach((child) => {
          this.addMesh(obj3d, child);
        });
      } else {
        this.addMesh(this, meshInfo);
      }
    });
  }

  private addMesh(parent, meshInfo: any) {
    let material;
    if (meshInfo.material) {
      material = this.resourceManager.getPbrMaterial(meshInfo.material);
    } else {
      material = new THREE.MeshBasicMaterial();
    }
    const mesh = new THREE.Mesh(
      this.resourceManager.getGeometry(meshInfo.uuid),
      material
    );
    mesh.name = meshInfo.name;
    mesh.position.copy(meshInfo.position);
    if (meshInfo.scale) {
      mesh.scale.copy(meshInfo.scale);
    }
    if (meshInfo.rotation) {
      mesh.rotation.copy(meshInfo.rotation);
    }
    parent.add(mesh);
  }

  initCameras() {
    const camera = new THREE.PerspectiveCamera(
      60,
      this.width / this.height,
      0.3,
      1000
    );
    camera.name = 'Main Camera';
    camera.position.set(-1.58, 1, 10);
    this.cameras.push(camera);
    this.add(camera);
  }
}
