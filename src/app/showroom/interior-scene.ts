import * as THREE from 'three';
import { ResourceManager } from './resource-manager';
export default class InteriorScene extends THREE.Scene {
  width;
  height;
  resourceManager: ResourceManager;
  cameraInfos = [
    {
      name: 'intro_camera',
      fov: 50,
      aspect: 1.85423732,
      near: 0.3,
      far: 1000,
      position: new THREE.Vector3(6.196969, 1.4, -3.28786182),
      rotation: new THREE.Euler(-Math.PI, 0, -Math.PI),
    },
    {
      name: 'intro_camera (1)',
      fov: 50,
      aspect: 2.1856,
      near: 0.3,
      far: 1000,
      position: new THREE.Vector3(5.186969, 0, -3.01786184),
      rotation: new THREE.Euler(-Math.PI, 0, -Math.PI),
    },
    {
      name: 'canape_camera',
      fov: 50,
      aspect: 1.85423732,
      near: 0.3,
      far: 1500,
      position: new THREE.Vector3(-3.046, 1.159, 0.666),
      rotation: new THREE.Euler(
        -1.5497513570976091,
        1.250454932661491,
        1.5486237331854567
      ),
      target: new THREE.Vector3(-0.015, -0.123, -2.387),
    },
    {
      name: 'coffee_table_camera',
      fov: 50,
      aspect: 1.85423732,
      near: 0.3,
      far: 1500,
      position: new THREE.Vector3(-4.633, 0.702, 0.782),
      rotation: new THREE.Euler(
        -1.5156146095501073,
        -1.0646651586647993,
        -1.5136493337489443
      ),
      target: new THREE.Vector3(-0.02, 0.001, -1.27),
    },
    {
      name: 'table_camera',
      fov: 50,
      aspect: 1.85423732,
      near: 0.3,
      far: 1500,
      position: new THREE.Vector3(0.378, 1.304, 1.495),
      rotation: new THREE.Euler(
        -0.5284456810700553,
        -0.6991409128592107,
        -0.35941094163352966
      ),
      target: new THREE.Vector3(0.31467846, 0.119828373, -2.34362459),
    },
    {
      name: 'coffee_table_camera',
      fov: 50,
      aspect: 1.85423732,
      near: 0.3,
      far: 1500,
      position: new THREE.Vector3(-2.341, 0.729, 0.731),
      rotation: new THREE.Euler(
        -1.6563230142682888,
        1.063478705201497,
        1.6626485531806419
      ),
      target: new THREE.Vector3(0.042, 0.079, -1.322),
    },
    {
      name: 'fauteuil_camera',
      fov: 50,
      aspect: 1.85423732,
      near: 0.3,
      far: 1500,
      position: new THREE.Vector3(-1.512, 0.967, 0.965),
      rotation: new THREE.Euler(
        -2.690293272918125,
        0.48611450061625655,
        2.918917899374958
      ),
      target: new THREE.Vector3(0.194, 0.11, -1.756),
    },
    {
      name: 'fauteuil2_camera',
      fov: 50,
      aspect: 1.85423732,
      near: 0.3,
      far: 1500,
      position: new THREE.Vector3(-2.617, 0.967, 0.723),
      rotation: new THREE.Euler(
        -0.3995776158559613,
        -0.13266236673622778,
        -0.055800654670716814
      ),
      target: new THREE.Vector3(-0.03, 0.068, -1.657),
    },
    {
      name: 'table_camera',
      fov: 50,
      aspect: 1.85423732,
      near: 0.3,
      far: 1500,
      position: new THREE.Vector3(0.4, 1.413, -1.453),
      rotation: new THREE.Euler(
        -2.605636073849709,
        -0.7140813499917479,
        -2.770613954657045
      ),
      target: new THREE.Vector3(-0.102858953, 0.07571016, -2.520606),
    },
    {
      name: 'table_camera',
      fov: 50,
      aspect: 1.85423732,
      near: 0.3,
      far: 1500,
      position: new THREE.Vector3(3.854, 1.413, -0.988),
      rotation: new THREE.Euler(
        -2.571761463549667,
        0.7737192265548665,
        2.720617259869308
      ),
      target: new THREE.Vector3(0.267821431, -0.0508262925, -2.21811175),
    },
    {
      name: 'table_camera',
      fov: 50,
      aspect: 1.85423732,
      near: 0.3,
      far: 1500,
      position: new THREE.Vector3(3.805, 1.413, 1.545),
      rotation: new THREE.Euler(
        -0.49205509446731904,
        0.61488517381671,
        0.29989122689037495
      ),
      target: new THREE.Vector3(-0.412846357, -0.00667059561, -2.323666),
    },
    {
      name: 'fauteuil_camera',
      fov: 50,
      aspect: 1.85423732,
      near: 0.3,
      far: 1500,
      position: new THREE.Vector3(-4.0260005, 0.9669999, 2.10900021),
      rotation: new THREE.Euler(
        -1.9458543164953028,
        -1.1434918777879268,
        -1.9790779797458395
      ),
      target: new THREE.Vector3(-0.0587335825, 0.0534014367, -1.62057436),
    },
    {
      name: 'start_camera',
      fov: 50,
      aspect: 1.85423732,
      near: 0.3,
      far: 1500,
      matrix: [
        -0.944376469,
        0.0,
        -0.328866363,
        0.0,
        0.0,
        1.0,
        0.0,
        0.0,
        0.328866363,
        0.0,
        -0.944376469,
        0.0,
        -0.32,
        1.4,
        -1.39,
        1.0,
      ],
      position: new THREE.Vector3(-0.32, 1.4, -1.39),
      rotation: new THREE.Euler(-Math.PI, 0.3351029159471995, -Math.PI),
    },
    {
      name: 'suspended_lamp_camera',
      fov: 50,
      aspect: 1.85423732,
      near: 0.3,
      far: 1500,
      position: new THREE.Vector3(1.374, 1.899, -0.679),
      rotation: new THREE.Euler(
        -2.605636063855058,
        -0.7140813397969916,
        -2.7706139443616316
      ),
      target: new THREE.Vector3(0.039, 0.011, -1.215),
    },
  ];
  cameras = [];
  meshes: any = [];
  materials = {};

  constructor(width, height, resourceManager) {
    super();
    this.width = width;
    this.height = height;
    this.resourceManager = resourceManager;
    this.initCameras();
    this.initLights();
    this.addUIPanel();
    this.addSuspendLamp();
    this.addRoom();
    this.addTripodLamp();
    this.addLamps();
    this.addStrokeObjects();
    this.addEtagereMerged();
    this.addBookShelves();
    this.addDoor();
    this.addSpots();
    this.addLandScape();
    this.addRugs();
    this.addCoffeeTable();
    this.addVase();
    this.addHoverGroupCanape();
    this.addArmChairs();
    this.addJbBowl();
    this.addChairs();
    this.addTable();
    this.addColliders();
    this.addArtworks();
    this.addInstructions();

    const axesHelper = new THREE.AxesHelper(200);
    this.add(axesHelper);
    console.log(this);
  }
  addUIPanel() {
    const uipanel = new THREE.Object3D();
    uipanel.name = 'ui_panel';
    uipanel.position.set(-12.201, -0.982, -3.46766567);
    uipanel.scale.set(0.01, 0.01, 0.01);
    this.add(uipanel);

    const nameGeo = this.resourceManager.getGeometry(
      '028BBF08-45BD-4CB4-B022-8EC27F7D16D7'
    );
    const nameMat = this.resourceManager.getPbrMaterial(
      '618C3F83-144B-4A76-9B98-CE8CFF3199D0'
    );
    const name = new THREE.Mesh(nameGeo, nameMat);
    name.name = 'name';
    name.position.set(22, 12.7, 0);
    name.scale.set(512, 100, 1);
    name.castShadow = true;
    name.receiveShadow = true;
    name.visible = false;

    uipanel.add(name);

    const line = new THREE.Object3D();
    line.name = 'line';
    line.position.set(-233.5, -43.42, 0);
    line.scale.set(410, 6, 1);
    uipanel.add(line);
    const lineGeo = this.resourceManager.getGeometry(
      '028BBF08-45BD-4CB4-B022-8EC27F7D16D7'
    );

    const lineMesh = new THREE.Mesh(lineGeo);
    lineMesh.name = 'line';
    lineMesh.position.set(0.50000006, 0.13, 0);
    lineMesh.castShadow = true;
    lineMesh.receiveShadow = true;
    line.add(lineMesh);

    const materialGeo = this.resourceManager.getGeometry(
      '028BBF08-45BD-4CB4-B022-8EC27F7D16D7'
    );
    const materialMat = this.resourceManager.getPbrMaterial(
      'B43DF060-3348-4F5C-9E56-621D7D8369CF'
    );
    const material = new THREE.Mesh(materialGeo, materialMat);
    material.name = 'material';
    material.position.set(22.7000237, -109.5, 0);
    material.scale.set(512, 128, 1);
    material.castShadow = true;
    material.receiveShadow = true;
    uipanel.add(material);

    const dimensionsGeo = this.resourceManager.getGeometry(
      '028BBF08-45BD-4CB4-B022-8EC27F7D16D7'
    );
    const dimensionsMat = this.resourceManager.getPbrMaterial(
      '9E2355AF-3225-479E-8985-F007C9D360BB'
    );
    const dimensions = new THREE.Mesh(dimensionsGeo, dimensionsMat);
    dimensions.name = 'dimensions';
    dimensions.position.set(22.7000237, -109.500015, 0);
    dimensions.scale.set(512, 128, 1);
    dimensions.castShadow = true;
    dimensions.receiveShadow = true;
    uipanel.add(dimensions);
  }
  addInstructions() {
    const instructions = new THREE.Object3D();
    instructions.name = 'instructions';
    instructions.position.set(-11.706, 3.302, 0);
    this.add(instructions);

    const configInstructionGeo = this.resourceManager.getGeometry(
      '028BBF08-45BD-4CB4-B022-8EC27F7D16D7'
    );
    const configInstructionMat = this.resourceManager.getPbrMaterial(
      '7A50F5FE-DFE2-4CCA-9B50-225CE287DE44'
    );
    const configInstruction = new THREE.Mesh(
      configInstructionGeo,
      configInstructionMat
    );
    configInstruction.name = 'configure_instructions';
    configInstruction.scale.set(1.024, 0.077, 1);
    configInstruction.castShadow = true;
    configInstruction.receiveShadow = true;

    instructions.add(configInstruction);

    const moveInstructionsGeo = this.resourceManager.getGeometry(
      '028BBF08-45BD-4CB4-B022-8EC27F7D16D7'
    );
    const moveInstructionsMat = this.resourceManager.getPbrMaterial(
      '5BFF7596-20A8-461E-935B-FAA8AF56AC95'
    );
    const moveInstructions = new THREE.Mesh(
      moveInstructionsGeo,
      moveInstructionsMat
    );
    moveInstructions.name = 'move_instructions';
    moveInstructions.scale.set(1.02399993, 0.077, 1);
    moveInstructions.castShadow = true;
    moveInstructions.receiveShadow = true;
    instructions.add(moveInstructions);
  }

  addArtworks() {
    const artworks = new THREE.Object3D();
    artworks.name = 'artworks';
    artworks.position.set(2.25527954, 1.62184131, -2.71347427);
    this.add(artworks);

    const artworksMergedGeo = this.resourceManager.getGeometry(
      'BEE341AA-FDB0-44B0-AF3B-BBD23A6B78E5'
    );
    const artworksMergedMat = this.resourceManager.getPbrMaterial(
      '0256DF06-5622-4774-9E99-4C48B2421826'
    );
    const artworksMerged = new THREE.Mesh(artworksMergedGeo, artworksMergedMat);
    artworksMerged.name = 'artworks_merged';
    artworksMerged.position.set(-2.25527954, -1.62184131, 2.71347427);
    artworksMerged.castShadow = true;
    artworksMerged.receiveShadow = true;

    artworks.add(artworksMerged);
  }
  addColliders() {
    const colliders = new THREE.Object3D();
    colliders.name = 'colliders';
    colliders.position.set(-7.108556, -1.74660492, 2.67171645);
    this.add(colliders);

    const colliderInfos = [
      {
        name: 'Cube (1)',
        type: 'cube',
        position: new THREE.Vector3(4.583, 1.775, -0.36),
        rotation: new THREE.Euler(0, 0.5542254716555337, 0),
        scale: new THREE.Vector3(
          0.9981412458275413,
          0.0396759361,
          1.1364064228692006
        ),
      },
      {
        name: 'Cylinder',
        type: 'cylinder',
        position: new THREE.Vector3(3.572, 1.792, -1.92),
        scale: new THREE.Vector3(1.051907, 0.009522037, 1.05190718),
      },
      {
        name: 'Cube (3)',
        type: 'cube',
        position: new THREE.Vector3(4.654, 1.797, -3.46),
        rotation: new THREE.Euler(0, -0.6962568519982428, 0),
        scale: new THREE.Vector3(
          0.9309938748140489,
          0.0374122,
          1.0599579307968763
        ),
      },
      {
        name: 'Cube (4)',
        type: 'cube',
        position: new THREE.Vector3(1.714, 1.775, -1.948),
        scale: new THREE.Vector3(1.19113564, 0.03318112, 4.03261328),
      },
      {
        name: 'Cylinder (2)',
        type: 'cylinder',
        position: new THREE.Vector3(0.27, 1.792, 0.88),
        scale: new THREE.Vector3(0.5967077, 0.00540149724, 0.59670794),
      },
      {
        name: 'Cylinder (4)',
        type: 'cylinder',
        position: new THREE.Vector3(0.292, 1.792, -4.772),
        scale: new THREE.Vector3(0.6588501, 0.00596402, 0.658850253),
      },
      {
        name: 'Cube (5)',
        type: 'cube',
        position: new THREE.Vector3(2.564, 1.775, -5.174),
        rotation: new THREE.Euler(0, -1.5707962085205964, 0),
        scale: new THREE.Vector3(
          0.3141585000000022,
          0.03318112,
          1.529214140000011
        ),
      },
      {
        name: 'Cube (6)',
        type: 'cube',
        position: new THREE.Vector3(9.251, 1.775, -2.521),
        rotation: new THREE.Euler(0, -1.5707962085205964, 0),
        scale: new THREE.Vector3(
          1.1610485300000082,
          0.03318112,
          2.655312780000019
        ),
      },
      {
        name: 'Cube (7)',
        type: 'cube',
        position: new THREE.Vector3(8.777, 1.775, -3.259),
        rotation: new THREE.Euler(0, -1.5707962085205964, 0),
        scale: new THREE.Vector3(
          0.560765700000004,
          0.0382666849,
          0.5533947350000039
        ),
      },
      {
        name: 'Cube (8)',
        type: 'cube',
        position: new THREE.Vector3(9.712, 1.775, -3.268),
        rotation: new THREE.Euler(0, -1.5707962085205964, 0),
        scale: new THREE.Vector3(
          0.560765700000004,
          0.0382666849,
          0.5533947350000039
        ),
      },
      {
        name: 'Cube (9)',
        type: 'cube',
        position: new THREE.Vector3(9.712, 1.775, -1.757),
        rotation: new THREE.Euler(0, -1.5707962085205964, 0),
        scale: new THREE.Vector3(
          0.560765700000004,
          0.0382666849,
          0.5533947350000039
        ),
      },
      {
        name: 'Cube (10)',
        type: 'cube',
        position: new THREE.Vector3(8.777, 1.775, -1.748),
        rotation: new THREE.Euler(0, -1.5707962085205964, 0),
        scale: new THREE.Vector3(
          0.560765900000004,
          0.0382666849,
          0.5533947350000039
        ),
      },
      {
        name: 'Cube (11)',
        type: 'cube',
        position: new THREE.Vector3(10.755, 1.775, -2.512),
        rotation: new THREE.Euler(0, -1.5707962085205964, 0),
        scale: new THREE.Vector3(
          0.5607665000000039,
          0.0382666849,
          0.5533947350000039
        ),
      },
      {
        name: 'Cylinder (5)',
        type: 'cylinder',
        position: new THREE.Vector3(11.41, 1.792, -0.68),
        scale: new THREE.Vector3(0.6588501, 0.00596402, 0.658850253),
      },
      {
        name: 'Cylinder (7)',
        type: 'cylinder',
        position: new THREE.Vector3(7.01, 1.792, 1.2),
        rotation: new THREE.Euler(0, -1.5707962085205964, 0),
        scale: new THREE.Vector3(0.6588501, 0.00596402, 0.658850253),
      },
      {
        name: 'Cylinder (8)',
        type: 'cylinder',
        position: new THREE.Vector3(11.57, 1.792, -4.79),
        scale: new THREE.Vector3(0.6588501, 0.00596402, 0.658850253),
      },
      {
        name: 'Cube (12)',
        type: 'cube',
        position: new THREE.Vector3(7.761, 1.775, -2.512),
        rotation: new THREE.Euler(0, -1.5707962085205964, 0),
        scale: new THREE.Vector3(
          0.560766757000004,
          0.0382666849,
          0.5533947350000039
        ),
      },
    ];
    this.parseColliders(colliders, colliderInfos);
  }
  parseColliders(parent, colliderInfos) {
    colliderInfos.forEach((collider) => {
      let geo;
      if (collider.type === 'cube') {
        geo = this.resourceManager.getGeometry(
          'EFB5AE34-A34C-4F9B-AED8-C1FC253FCF18'
        );
      } else {
        geo = this.resourceManager.getGeometry(
          '5D693ADF-41F5-43C9-808F-CA52FB240637'
        );
      }
      const mat = new THREE.MeshBasicMaterial();
      mat.visible = false;
      const c = new THREE.Mesh(geo, mat);
      c.name = collider.name;
      if (collider.position) c.position.copy(collider.position);
      if (collider.rotation) c.rotation.copy(collider.rotation);
      if (collider.scale) c.scale.copy(collider.scale);
      c.castShadow = true;
      c.receiveShadow = true;
      parent.add(c);
    });
  }
  addTable() {
    const tableParent = new THREE.Object3D();
    tableParent.name = 'TableParent';
    tableParent.position.set(2.06, 0.96, -8.939142);
    this.add(tableParent);

    const hoverGroupTable = new THREE.Object3D();
    hoverGroupTable.name = 'hovergroup_table';
    hoverGroupTable.position.set(0.096, -0.257, 9.085);
    tableParent.add(hoverGroupTable);

    const tableObjectsGeo = this.resourceManager.getGeometry(
      '74155BC7-710E-4092-85DE-D5672B68843D'
    );
    const tableObjectsMat = this.resourceManager.getPbrMaterial(
      '78905170-8B31-4CFE-9437-2F46AA876786'
    );
    const tableObjects = new THREE.Mesh(tableObjectsGeo, tableObjectsMat);
    tableObjects.name = 'table_objects_merged';
    tableObjects.position.set(-2.156, -0.702999949, -0.145857811);
    tableObjects.castShadow = true;
    tableObjects.receiveShadow = true;
    hoverGroupTable.add(tableObjects);

    const table = new THREE.Object3D();
    table.name = 'table';
    table.position.set(-0.0235546082, -0.6727812, 0.00500011444);
    hoverGroupTable.add(table);

    table.add(
      this.parseMaterials([
        'F5AA390A-1D4F-44F7-B987-2060873B9840',
        '8E9F9D5A-6DDC-4030-B0E3-F5EEB6561F0F',
        'D5704322-FF4A-426B-A7C0-6E499086253C',
        'F570FE16-C714-46EB-B739-18C132EE7207',
      ])
    );

    const tableTopGeo = this.resourceManager.getGeometry(
      '53F0ED92-8BA3-4F62-925C-463014CB2071'
    );
    const tableTopMat = this.resourceManager.getPbrMaterial(
      'E4C82D5A-FFAD-4321-B627-7AFA9FDB6E7C'
    );
    const tableTop = new THREE.Mesh(tableTopGeo, tableTopMat);
    tableTop.name = 'table_top';
    tableTop.position.set(0, 2.98023224e-8, 0);
    tableTop.rotation.set(Math.PI / 2, 0, 0);
    tableTop.scale.set(100, 100, 100);
    tableTop.castShadow = true;
    tableTop.receiveShadow = true;
    table.add(tableTop);

    const tableBaseGeo = this.resourceManager.getGeometry(
      '0440AD87-6137-449C-9FC3-86340B6B11ED'
    );
    const tableBaseMat = this.resourceManager.getPbrMaterial(
      'CA7F4261-3267-4E5C-A6C1-2DA4B0A1FE97'
    );
    const tableBase = new THREE.Mesh(tableBaseGeo, tableBaseMat);
    tableBase.name = 'table_base';
    tableBase.position.set(0, 2.98023224e-8, 0);
    tableBase.rotation.set(Math.PI / 2, 0, 0);
    tableBase.scale.set(100, 100, 100);
    tableBase.castShadow = true;
    tableBase.receiveShadow = true;
    table.add(tableBase);

    const tableStrokeGeo = this.resourceManager.getGeometry(
      '657ACF8F-A290-49D9-A6B4-435DACD851C8'
    );
    const tableStroke = new THREE.Mesh(tableStrokeGeo);
    tableStroke.name = 'table_stroke';
    tableStroke.renderOrder = 1;
    tableStroke.visible = false;
    table.add(tableStroke);
    table.renderOrder = 2;
  }
  addChairs() {
    const chairs = new THREE.Object3D();
    chairs.name = 'Chairs';
    chairs.position.set(2.05, 0.915, -8.942437);
    this.add(chairs);

    const topMergedGeo = this.resourceManager.getGeometry(
      '6D47EC52-2ED7-4184-AAFA-EBD52A1372BD'
    );
    const topMergedMat = this.resourceManager.getPbrMaterial(
      'D4D2DDF9-6B4D-4894-B922-4EE72FED8602'
    );
    const topMerged = new THREE.Mesh(topMergedGeo, topMergedMat);
    topMerged.name = 'top_merged';
    topMerged.position.set(-2.05, -0.915, 8.942437);
    topMerged.castShadow = true;
    topMerged.receiveShadow = true;
    chairs.add(topMerged);
    const bottomMergedGeo = this.resourceManager.getGeometry(
      '6278E2F9-1D1C-482B-B427-77641AA911C9'
    );
    const bottomMergedMat = this.resourceManager.getPbrMaterial(
      'DF7EC590-7AD6-4B27-9D75-2F34FBCA2AA3'
    );
    const bottomMerged = new THREE.Mesh(bottomMergedGeo, bottomMergedMat);
    bottomMerged.name = 'bottom_merged';
    bottomMerged.position.set(-2.05, -0.915, 8.942437);
    bottomMerged.castShadow = true;
    bottomMerged.receiveShadow = true;
    chairs.add(bottomMerged);
  }
  addJbBowl() {
    const bowlGeo = this.resourceManager.getGeometry(
      '206F692A-DB60-4018-9A55-4C7A75AFF2FB'
    );
    const bowlMat = this.resourceManager.getPbrMaterial(
      'BBE30EDF-2AE6-47AF-9B81-2100B2CDA96A'
    );
    const bowl = new THREE.Mesh(bowlGeo, bowlMat);
    bowl.name = 'jb_bowl (1)';
    bowl.position.set(4.312747, 0.09064174, 2);
    bowl.rotation.set(Math.PI / 2, 3.812497573751997e-7, -2.2814637191153766);
    bowl.scale.set(1.0000000486184644, 1.0000000199156016, 1.000000000000139);
    this.add(bowl);
  }
  addArmChairs() {
    const armchairs = new THREE.Object3D();
    armchairs.name = 'armchairs';
    this.add(armchairs);

    const infos = [
      {
        name: 'fauteuil',
        position: new THREE.Vector3(-2.52, 0.04, 2.33),
        rotation: new THREE.Euler(Math.PI / 2, 0, -0.5463153952909182),
        scale: new THREE.Vector3(0.9999999690278356, 0.9999999690278356, 1),
        feetGeo: this.resourceManager.getGeometry(
          '967028F2-A24F-497C-8AB0-23AA0DC97283'
        ),
        mainGeo: this.resourceManager.getGeometry(
          'CAB992F7-75BE-4DC2-86A1-EB178272E4AC'
        ),
      },
      {
        name: 'fauteuil2',
        position: new THREE.Vector3(-2.45, 0.04, -0.81),
        rotation: new THREE.Euler(
          Math.PI / 2,
          0.0005329026116013001,
          -2.4435956182123153
        ),
        scale: new THREE.Vector3(
          1.000000034772627,
          1.000000004143911,
          0.9999999936358039
        ),
        feetGeo: this.resourceManager.getGeometry(
          '0CA9F8C9-DC34-47DC-8F6A-EC572A2ED7DD'
        ),
        mainGeo: this.resourceManager.getGeometry(
          '9E812446-BE94-4973-99FC-20C9F5A45E23'
        ),
      },
    ];
    for (let i = 0; i < 2; i++) {
      armchairs.add(this.addFauteuil(infos[i]));
    }
  }

  addFauteuil(info) {
    const fauteuil = new THREE.Object3D();
    fauteuil.name = info.name;
    fauteuil.position.copy(info.position);
    fauteuil.rotation.copy(info.rotation);
    fauteuil.scale.copy(info.scale);

    const strokeGeo = this.resourceManager.getGeometry(
      '477FDEB5-0DF1-4DA8-B167-792850EF8AEE'
    );
    const stroke = new THREE.Mesh(strokeGeo);
    stroke.name = info.name + '_stroke';
    stroke.castShadow = true;
    stroke.receiveShadow = true;
    stroke.visible = false;
    fauteuil.add(stroke);

    const seatFeetMat = this.resourceManager.getPbrMaterial(
      '583F85D7-A08C-4E9C-980B-92F16595A57B'
    );
    const seatFeet = new THREE.Mesh(info.feetGeo, seatFeetMat);
    seatFeet.name = 'seat_feet';
    seatFeet.castShadow = true;
    seatFeet.receiveShadow = true;
    fauteuil.add(seatFeet);

    const seatMainMat = this.resourceManager.getPbrMaterial(
      '74D891AC-B145-42CA-BD00-88725D2C9EED'
    );
    const seatMain = new THREE.Mesh(info.mainGeo, seatMainMat);
    seatMain.name = 'seat_main';
    seatMain.castShadow = true;
    seatMain.receiveShadow = true;
    fauteuil.add(seatMain);

    const materialUUIDs = [
      '5CA48FE9-BD0D-496C-BB93-0E778952D1D2',
      'C2BD9FD0-A330-4199-ADB9-BC7CCB314AC1',
      '8790BCB1-CB72-4B9F-9AD3-F95465824A78',
      '802CF924-23E9-4B10-AF11-6F012EE97D3E',
    ];
    fauteuil.add(this.parseMaterials(materialUUIDs));

    return fauteuil;
  }
  private parseMaterials(uuids) {
    const materials = new THREE.Object3D();
    materials.name = 'materials';

    uuids.forEach((uuid) => {
      const material1Geo = this.resourceManager.getGeometry(
        '6823E7EE-ED1D-4CC9-8B54-F6E71BAD234C'
      );
      const materialMat = this.resourceManager.getPbrMaterial(uuid);
      const material = new THREE.Mesh(material1Geo, materialMat);
      materials.add(material);
    });

    return materials;
  }

  addHoverGroupCanape() {
    const hoverGroupCanape = new THREE.Object3D();
    hoverGroupCanape.name = 'hovergroup_canape';
    hoverGroupCanape.position.set(-4.83625269, 0.0585417151, 0.74);
    this.add(hoverGroupCanape);

    const canape = new THREE.Object3D();
    canape.name = 'canape';
    canape.position.set(-0.5300002, -0.017, -0.03399998);
    canape.rotation.set(
      Math.PI / 2,
      -2.6387533097152824e-18,
      8.114338276427248e-17
    );
    canape.scale.set(99.99991, 99.99987000000071, 99.99987000000071);
    hoverGroupCanape.add(canape);

    const sofaFeetGeo = this.resourceManager.getGeometry(
      '65E3910E-2A9A-44BB-B7F1-78268FE37A98'
    );
    const sofaGeetMat = this.resourceManager.getPbrMaterial(
      '7688419F-B275-405A-86C7-A13671E7AB59'
    );
    const sofaFeet = new THREE.Mesh(sofaFeetGeo, sofaGeetMat);
    sofaFeet.name = 'sofa_feet';
    sofaFeet.castShadow = true;
    sofaFeet.receiveShadow = true;
    canape.add(sofaFeet);

    const sofaMainGeo = this.resourceManager.getGeometry(
      '0097DA9B-4A2C-404E-9EED-FE06B5F797FA'
    );
    const sofaMainMat = this.resourceManager.getPbrMaterial(
      'AAC553B9-4011-47E6-BA71-E359C47F647F'
    );
    const sofaMain = new THREE.Mesh(sofaMainGeo, sofaMainMat);
    sofaMain.name = 'sofa_main';
    sofaMain.castShadow = true;
    sofaMain.receiveShadow = true;
    canape.add(sofaMain);

    canape.add(
      this.parseMaterials([
        '6A3317C4-0175-4EBD-95BC-40815B944B95',
        '96314477-BEDD-4E37-8AD6-C42A9A7DDDD4',
        'C55820BC-1CAC-495E-BFB9-87D1F4552144',
        '7B1BFD86-E711-4519-837D-7AF84EAE96BD',
      ])
    );

    const canapeStrokeGeo = this.resourceManager.getGeometry(
      '227D58DA-AD40-4BA5-8E62-A7528C613869'
    );
    const canapeStroke = new THREE.Mesh(canapeStrokeGeo);
    canapeStroke.name = 'canape_stroke';
    canapeStroke.castShadow = true;
    canapeStroke.receiveShadow = true;
    canapeStroke.visible = false;
    canape.add(canapeStroke);

    const laptopGeo = this.resourceManager.getGeometry(
      '6498D32D-D7DA-4861-B8AA-67509FED7D92'
    );
    const laptopMat = this.resourceManager.getPbrMaterial(
      'FA5B78D6-7E9B-4808-B05B-463DE03F76D4'
    );
    const laptop = new THREE.Mesh(laptopGeo, laptopMat);
    laptop.name = 'laptop';
    laptop.position.set(-0.43, 0.3568, 1.5);
    laptop.rotation.set(
      Math.PI / 2,
      -5.9604644220279146e-8,
      0.6218110226551543
    );
    laptop.scale.set(100.00000064978289, 100.0000006497827, 100.00000000000018);
    laptop.castShadow = true;
    laptop.receiveShadow = true;
    hoverGroupCanape.add(laptop);
  }
  addVase() {
    const vaseGeo = this.resourceManager.getGeometry(
      'CF47C4D3-325E-47F6-BD05-31ECF622A49B'
    );
    const vaseMat = this.resourceManager.getPbrMaterial(
      '80E825A1-A291-40FF-BE3D-188D52BD47DD'
    );
    const vase = new THREE.Mesh(vaseGeo, vaseMat);
    vase.name = 'vase';
    vase.position.set(-6.841951, 0.0260000229, 3.54970741);
    vase.rotation.set(Math.PI / 2, -1.6742348125931085e-7, -2.9075994678737094);
    vase.scale.set(1.000000225349827, 1.000000128074994, 1.0000001200000193);
    vase.castShadow = true;
    vase.receiveShadow = true;
    this.add(vase);
  }
  addCoffeeTable() {
    const coffeeTable = new THREE.Object3D();
    coffeeTable.name = 'coffee_table';
    coffeeTable.position.set(-3.53, 0.04, 0.75);
    coffeeTable.rotation.set(Math.PI / 2, 0, 0);
    this.add(coffeeTable);

    coffeeTable.add(
      this.parseMaterials([
        '969B2D8B-78CF-4486-BBC7-3B9DFADBBA6F',
        '39F82CB7-E939-47D7-BA74-8E81659370DE',
        '78116878-57AF-46AA-9362-CD044313749A',
        '5975BDE1-9E34-43EF-AE55-BB1DC81A35BF',
      ])
    );

    const feetGeo = this.resourceManager.getGeometry(
      '1ACD3173-8269-48B8-B625-E44EC6E5B9DD'
    );
    const feetMat = this.resourceManager.getPbrMaterial(
      'B9F05509-D402-4CCF-9EC6-F5F847DF0829'
    );
    const feet = new THREE.Mesh(feetGeo, feetMat);
    feet.name = 'feet';
    feet.position.set(0, 0, 1.49011609e-10);
    feet.rotation.set(4.371138999999998e-8, 0, 0);
    feet.castShadow = true;
    feet.receiveShadow = true;
    coffeeTable.add(feet);

    const boardGeo = this.resourceManager.getGeometry(
      'E08CB4C3-862D-4B8B-AAC5-4C50A8E1EF58'
    );
    const boardMat = this.resourceManager.getPbrMaterial(
      '9A5385AF-F8A5-4099-9DCE-AC9EEDF07407'
    );
    const board = new THREE.Mesh(boardGeo, boardMat);
    board.name = 'board';
    board.position.set(0, 0, 1.49011609e-10);
    board.rotation.set(4.371138999999998e-8, 0, 0);
    board.castShadow = true;
    board.receiveShadow = true;
    coffeeTable.add(board);

    const borderGeo = this.resourceManager.getGeometry(
      '7DCE8ED1-9270-4A7C-AB77-1516928E00A0'
    );
    const border = new THREE.Mesh(borderGeo);
    border.name = 'coffee_table_stroke';
    border.castShadow = true;
    border.receiveShadow = true;
    border.visible = false;
    coffeeTable.add(border);
  }
  addRugs() {
    const rugGeo = this.resourceManager.getGeometry(
      '0447F8F9-E1A9-4DD8-91BD-8B037787D704'
    );
    const rugMat = this.resourceManager.getPbrMaterial(
      'D5F1ECA1-843D-4BBE-8BBF-133B1ECB4103'
    );
    const rug = new THREE.Mesh(rugGeo, rugMat);
    rug.name = 'rug';
    rug.position.set(-3.28, 0.04, 0.69);
    rug.rotation.set(Math.PI / 2, 0, 0);
    rug.scale.set(100, 95, 100);
    rug.castShadow = true;
    rug.receiveShadow = true;
    this.add(rug);

    const rug1Geo = this.resourceManager.getGeometry(
      '77C97091-0D57-4ABF-9F0E-09DC9EC0DB09'
    );
    const rug1Mat = this.resourceManager.getPbrMaterial(
      'F7C23502-D46C-4D40-8A04-5BCEF4D63FA7'
    );
    const rug1 = new THREE.Mesh(rug1Geo, rug1Mat);
    rug1.name = 'rug (1)';
    rug1.position.set(2.11, 0.04, 0.1);
    rug1.rotation.set(Math.PI / 2, 0, 0);
    rug1.scale.set(143.906876, 66.45058000000047, 99.99993000000072);
    rug1.castShadow = true;
    rug1.receiveShadow = true;
    this.add(rug1);
  }
  addLandScape() {
    const landscape = new THREE.Object3D();
    landscape.name = 'landscape';
    this.add(landscape);

    const sunAndCloudsdGeo = this.resourceManager.getGeometry(
      '810754A5-A7F2-4590-B399-B8AF35D0913F'
    );
    const sunAndCloudsMat = this.resourceManager.getPbrMaterial(
      '629D0153-1528-43E4-BB7D-68AAFDE2A301'
    );
    const sunAndClouds = new THREE.Mesh(sunAndCloudsdGeo, sunAndCloudsMat);
    sunAndClouds.name = 'sun_and_clouds_merged';
    sunAndClouds.castShadow = true;
    sunAndClouds.receiveShadow = true;
    landscape.add(sunAndClouds);

    const islandGeo = this.resourceManager.getGeometry(
      '7B92A517-2210-45C2-95EF-A143116A62F6'
    );
    const islandMat = this.resourceManager.getPbrMaterial(
      '97D90AE5-D4F7-4914-9609-47005AD7F130'
    );
    const island = new THREE.Mesh(islandGeo, islandMat);
    island.name = 'islands_merged';
    island.castShadow = true;
    island.receiveShadow = true;
    landscape.add(island);

    const seaHighlights2Geo = this.resourceManager.getGeometry(
      '028BBF08-45BD-4CB4-B022-8EC27F7D16D7'
    );
    const seaHighlights2Mat = this.resourceManager.getPbrMaterial(
      '4AAD14BE-2730-455C-B8B2-59CC2B54F5D7'
    );
    const seaHighlights2 = new THREE.Mesh(seaHighlights2Geo, seaHighlights2Mat);
    seaHighlights2.name = 'sea_highlights2';
    seaHighlights2.position.set(53.62, 0, 67.41);
    seaHighlights2.rotation.set(-Math.PI, -0.636199715956123, -Math.PI);
    seaHighlights2.scale.set(39.67862037970549, 39.67861, 39.678609271239765);
    landscape.add(seaHighlights2);

    const skyGeo = this.resourceManager.getGeometry(
      '3A1EFBC9-BD1B-445B-AF2C-A8338BD830C3'
    );
    const skyMat = this.resourceManager.getPbrMaterial(
      '65430925-FE79-4C8D-AD00-E6D9AE65487C'
    );
    const sky = new THREE.Mesh(skyGeo, skyMat);
    sky.name = 'sky';
    sky.rotation.set(-1.629206750511334e-7, 0, 0);
    sky.scale.set(19204.9473, 19204.962900000253, 19204.962900000253);
    sky.castShadow = true;
    sky.receiveShadow = true;
    landscape.add(sky);

    const seaGeo = this.resourceManager.getGeometry(
      '829A3926-6304-456F-B714-7B472B63933C'
    );
    const seaMat = this.resourceManager.getPbrMaterial(
      '6DEAE6D3-5C55-4E9D-862C-4963E4BD3284'
    );
    const sea = new THREE.Mesh(seaGeo, seaMat);
    sea.name = 'sea';
    sea.rotation.set(-1.6292067686962149e-7, 0, 0);
    sea.scale.set(18941.3633, 18941.37300000025, 18941.37300000025);
    sea.castShadow = true;
    sea.receiveShadow = true;
    landscape.add(sea);

    const seaHighlightsGeo = this.resourceManager.getGeometry(
      '829A3926-6304-456F-B714-7B472B63933C'
    );
    const seaHighlightsMat = this.resourceManager.getPbrMaterial(
      '2C022BB8-C636-4102-B59E-157975E6D3F6'
    );
    const seaHighlights = new THREE.Mesh(seaHighlightsGeo, seaHighlightsMat);
    seaHighlights.name = 'sea_highlight';
    seaHighlights.rotation.set(-1.629206687151979e-7, 0, 0);
    seaHighlights.scale.set(18751.95, 18751.959000000246, 18751.959000000246);
    seaHighlights.castShadow = true;
    seaHighlights.receiveShadow = true;
    landscape.add(seaHighlights);
  }
  addSpots() {
    const spots = new THREE.Object3D();
    spots.name = 'spots';
    spots.position.set(-1.193, 2.394, -3.14900017);
    spots.scale.set(0.100087024, 0.00397965545, 0.100087039);
    spots.rotation.set(-Math.PI, 0, -Math.PI);
    spots.quaternion.set(0, 1, 0, 0);
    this.add(spots);

    const spot = new THREE.Object3D();
    spot.name = 'spot';
    spots.add(spot);
    spot.position.set(5.02000046, 0, 0);
    spots.add(spot);

    const spotLight = new THREE.SpotLight(
      0xffffff,
      0.35,
      10,
      0.87266463,
      0.3,
      2
    );
    spotLight.name = 'Spotlight';
    spotLight.rotation.set(-Math.PI / 2, 0, 0);
    // const spotLightHelp2 = new THREE.SpotLightHelper(spotLight);
    // spot.add(spotLightHelp2);
    spotLight.visible = false;
    spot.add(spotLight);

    const emissiveGeo = this.resourceManager.getGeometry(
      '5D693ADF-41F5-43C9-808F-CA52FB240637'
    );
    const emissiveMat = this.resourceManager.getPbrMaterial(
      '701B197D-6266-4BD2-BED7-E1D1DE60E301'
    );
    const emissive = new THREE.Mesh(emissiveGeo, emissiveMat);
    emissive.name = 'emissive';
    emissive.position.set(0, 0.7, 0);
    emissive.castShadow = true;
    emissive.receiveShadow = true;
    spot.add(emissive);

    const spot2 = new THREE.Object3D();
    spot2.name = 'spot (2)';
    spot2.position.set(-4.903, 0, 0);
    spots.add(spot2);

    const spotLight2 = new THREE.SpotLight(
      0xffffff,
      0.35,
      10,
      0.87266463,
      0.3,
      2
    );
    spotLight2.name = 'Spotlight';
    spotLight2.rotation.set(-Math.PI / 2, 0, 0);
    spot2.add(spotLight2);
    // const spotlightHelper = new THREE.SpotLightHelper(spotLight2);
    // spot2.add(spotlightHelper);

    const emissive2Geo = this.resourceManager.getGeometry(
      '8389FF23-1F7E-47FB-99C7-A79DEB3F80AD'
    );
    const emissive2Mat = this.resourceManager.getPbrMaterial(
      '701B197D-6266-4BD2-BED7-E1D1DE60E301'
    );
    const emissive2 = new THREE.Mesh(emissive2Geo, emissive2Mat);
    emissive2.name = 'emissive';
    emissive2.position.set(0, 0.7, 0);
    emissive2.castShadow = true;
    emissive2.receiveShadow = true;
    spot2.add(emissive2);
  }
  addDoor() {
    const door = new THREE.Object3D();
    door.name = 'door';
    door.position.set(-1.189, 1.07, -3.608);
    door.rotation.set(-Math.PI, 0, -Math.PI);
    this.add(door);

    const doorFrameGeo = this.resourceManager.getGeometry(
      '01C473D6-7196-4056-977B-06C95E5413B4'
    );
    const doorFrameMat = this.resourceManager.getPbrMaterial(
      '289DCE6D-8F6F-4BD6-B746-F42DAEFF0DD4'
    );
    const doorFrame = new THREE.Mesh(doorFrameGeo, doorFrameMat);
    door.add(doorFrame);
    doorFrame.name = 'door_frame';
    doorFrame.rotation.set(Math.PI / 2, 0, 0);
    doorFrame.scale.set(100, 100, 100);
    doorFrame.castShadow = true;
    doorFrame.receiveShadow = true;

    const doorFrontGeo = this.resourceManager.getGeometry(
      'EE428753-A0E0-4A78-A2EB-B7C03C74D88D'
    );
    const doorFrontMat = this.resourceManager.getPbrMaterial(
      'A8418435-646A-47F8-A2DA-B6172F59EE27'
    );
    const doorFront = new THREE.Mesh(doorFrontGeo, doorFrontMat);
    doorFront.name = 'door_front';
    doorFront.rotation.set(Math.PI / 2, 0, 0);
    doorFront.scale.set(100, 100, 100);
    doorFront.castShadow = true;
    doorFront.receiveShadow = true;
    door.add(doorFront);

    const handleGeo = this.resourceManager.getGeometry(
      '02E64E6E-F972-4073-8910-020852FBC4D5'
    );
    const handleMat = this.resourceManager.getPbrMaterial(
      '4D27F194-648F-4D52-91E8-86B0DD2CA7E2'
    );
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.name = 'handle';
    handle.rotation.set(Math.PI / 2, 0, 0);
    handle.scale.set(100, 100, 100);
    handle.castShadow = true;
    handle.receiveShadow = true;
    door.add(handle);
  }
  addBookShelves() {
    const bookShelves = new THREE.Object3D();
    bookShelves.name = 'book_shelves';
    bookShelves.position.set(-5.102, 1.76, -2.519);
    bookShelves.rotation.set(
      Math.PI / 2,
      -0.001029893541159061,
      -1.5707957312383165
    );
    bookShelves.scale.set(100, 100, 100);
    this.add(bookShelves);

    const merged = new THREE.Object3D();
    merged.name = 'merged';
    bookShelves.add(merged);

    const booksGeo = this.resourceManager.getGeometry(
      'A6610340-6645-4108-A390-15CC1F824341'
    );
    const booksMat = this.resourceManager.getPbrMaterial(
      '1D3DD130-FA01-46BF-9C32-A96127D4C616'
    );
    const books = new THREE.Mesh(booksGeo, booksMat);
    books.name = 'books';
    books.position.set(-0.02518997, 0.0510380939, 0.0175474416);
    books.rotation.set(-1.57182617596751, -1.5704982884322114, 0);
    books.scale.set(
      0.009999998302945623,
      0.009999998304171906,
      0.009999997000001284
    );
    books.castShadow = true;
    books.receiveShadow = true;

    const shelvesGeo = this.resourceManager.getGeometry(
      'FC04B211-C5BE-464D-B441-646E400068F0'
    );
    const shelvesMat = this.resourceManager.getPbrMaterial(
      '42657F56-6A81-4C45-B634-F111477295F8'
    );
    const shelves = new THREE.Mesh(shelvesGeo, shelvesMat);
    shelves.name = 'shelves';
    shelves.position.set(-0.02518997, 0.0510380939, 0.0175474416);
    shelves.rotation.set(-1.57182617596751, -1.5704982884322114, 0);
    shelves.scale.set(
      0.009999998302945623,
      0.009999998304171906,
      0.009999997000001284
    );
    shelves.castShadow = true;
    shelves.receiveShadow = true;
    merged.add(shelves);
    merged.add(books);

    const vaseGeo = this.resourceManager.getGeometry(
      '6E8E848E-5FF9-43BD-A059-A85135E522C3'
    );
    const vaseMat = this.resourceManager.getPbrMaterial(
      '80E825A1-A291-40FF-BE3D-188D52BD47DD'
    );
    const vase = new THREE.Mesh(vaseGeo, vaseMat);
    vase.name = 'vase (1)';
    vase.position.set(-0.0003100012, 0.00022186026, 0.00180277287);
    vase.rotation.set(
      -0.001029858390702225,
      -0.00033156913138548955,
      1.5707959176416895
    );
    vase.scale.set(
      0.003121525655357473,
      0.0031215247515874915,
      0.002414918983387109
    );
    vase.castShadow = true;
    vase.receiveShadow = true;
    bookShelves.add(vase);

    const bowlGeo = this.resourceManager.getGeometry(
      'AF378BC5-E906-422C-A407-D2D886E110AD'
    );
    const bowlMat = this.resourceManager.getPbrMaterial(
      'C10936D9-2DF7-497D-BB82-1F407B9345DE'
    );
    const bowl = new THREE.Mesh(bowlGeo, bowlMat);
    bowl.name = 'bowl (1)';
    bowl.position.set(-0.00008354187, 0.007582917, 0.000987091);
    bowl.rotation.set(
      0.0006803869816959598,
      -2.3994314667455793e-14,
      -3.141592485002437
    );
    bowl.scale.set(
      0.014682848000000208,
      0.014682857898540935,
      0.0225733384248986
    );
    bowl.castShadow = true;
    bowl.receiveShadow = true;
    bookShelves.add(bowl);
  }
  addEtagereMerged() {
    const etagereMerged = new THREE.Object3D();
    etagereMerged.name = 'etagere_merged';
    etagereMerged.position.set(-7.378, 1.339, 0.844);
    etagereMerged.rotation.set(
      Math.PI / 2,
      0.0011868557765299396,
      3.140597903155636
    );
    etagereMerged.scale.set(
      167.7248101149189,
      147.71502408409623,
      147.71502403766013
    );

    const largeShelfMergedGeo = this.resourceManager.getGeometry(
      '188E1DBD-3687-4D3B-82F5-42B016C65B89'
    );
    const largeShelfMergedMat = this.resourceManager.getPbrMaterial(
      'E688BCB0-3D4B-46A1-8167-1A964EFA40D6'
    );
    const largeShelfMerged = new THREE.Mesh(
      largeShelfMergedGeo,
      largeShelfMergedMat
    );
    largeShelfMerged.name = 'large_shelf_merged';
    largeShelfMerged.position.set(-0.043984212, 0.00566403, 0.009124028);
    largeShelfMerged.rotation.set(
      Math.PI / 2,
      0.000994750408121397,
      3.140405797860892
    );
    largeShelfMerged.scale.set(
      0.005962151729078509,
      0.006769791768054322,
      0.006769793659451286
    );
    largeShelfMerged.castShadow = true;
    largeShelfMerged.receiveShadow = true;
    etagereMerged.add(largeShelfMerged);

    this.add(etagereMerged);
  }
  addStrokeObjects() {
    const strokeObjects = new THREE.Object3D();
    strokeObjects.name = 'stroke_objects';
    strokeObjects.position.set(-5.6, 0, 0);
    this.add(strokeObjects);
  }
  addLamps() {
    const lamps = new THREE.Object3D();
    lamps.name = 'lamps';
    lamps.position.set(0.198, 0.231591582, 0.511);

    const lampsMergedGeo = this.resourceManager.getGeometry(
      'D1C65BFD-75D1-4D0A-A80F-CD326389BF49'
    );
    const lampsMergedMat = this.resourceManager.getPbrMaterial(
      'A06DAC25-3AD0-4C66-97C4-A1B1D7DC451F'
    );
    const lampsMerged = new THREE.Mesh(lampsMergedGeo, lampsMergedMat);
    lampsMerged.name = 'lamps_merged';
    lampsMerged.position.set(-0.198, -0.231591582, -0.511);
    lamps.add(lampsMerged);

    this.add(lamps);
  }
  addTripodLamp() {
    const tripodLampGeo = this.resourceManager.getGeometry(
      '98A774A8-4C70-43A2-B208-A94F449F9C91'
    );
    const tripodLampMat = this.resourceManager.getPbrMaterial(
      'FA62F3DB-A88A-4078-B369-AE206583F8C3'
    );
    const tripodLamp = new THREE.Mesh(tripodLampGeo, tripodLampMat);
    tripodLamp.name = 'tripod_lamp';
    tripodLamp.position.set(-6.765, 0.04, -2.082);
    tripodLamp.rotation.set(Math.PI / 2, 0, 0);
    tripodLamp.scale.set(100, 100, 100);
    tripodLamp.castShadow = true;
    tripodLamp.receiveShadow = true;

    const light = new THREE.PointLight(0xffffff, 0.35, 10, 2);
    light.position.set(0.00011, 0.00002, -0.01606);
    tripodLamp.add(light);

    this.add(tripodLamp);
  }
  addRoom() {
    const room = new THREE.Object3D();
    room.name = 'room';
    room.position.set(-0.180987835, 0.0334899426, -1.13);

    const windowGeo = this.resourceManager.getGeometry(
      '0F2258D9-DF5B-4476-85E5-47A5B9E9BA8C'
    );
    const windowMat = this.resourceManager.getPbrMaterial(
      'C746279C-AB8D-4919-9DD8-2F2ED5326170'
    );
    const window_merged = new THREE.Mesh(windowGeo, windowMat);
    window_merged.position.set(0.180987835, -0.0334899426, 1.13);
    window_merged.castShadow = true;
    window_merged.name = 'windows_merged';
    window_merged.receiveShadow = true;
    room.add(window_merged);

    const walls001Geo = this.resourceManager.getGeometry(
      '48779A13-A79A-491A-B728-CF1D6BEC5BDA'
    );
    const walls001Mat = this.resourceManager.getPbrMaterial(
      'D8587EF9-A854-46E9-AAD4-BBFA82465448'
    );
    const walls001 = new THREE.Mesh(walls001Geo, walls001Mat);
    walls001.name = 'walls.001';
    walls001.position.set(-0.25743866, 1.42000043, 0.06832886);
    walls001.rotation.set(Math.PI / 2, 0, 0);
    walls001.scale.set(100, 100, 100);
    walls001.castShadow = true;
    walls001.receiveShadow = true;
    room.add(walls001);

    const wallsGeo = this.resourceManager.getGeometry(
      'BBA7C1FD-F325-4D86-997B-D60D02360321'
    );
    const wallsMat = this.resourceManager.getPbrMaterial(
      'B221A1CB-AF33-4A27-9879-95AC757B0A38'
    );
    const walls = new THREE.Mesh(wallsGeo, wallsMat);
    walls.name = 'walls';
    walls.position.set(-0.25743866, 1.42000043, 0.06832886);
    walls.rotation.set(Math.PI / 2, 0, 0);
    walls.scale.set(100, 100, 100);
    walls.castShadow = true;
    walls.receiveShadow = true;
    room.add(walls);

    const glassesGeo = this.resourceManager.getGeometry(
      'C4E6105E-A623-452A-87C6-0B967F7C6804'
    );
    const glassesMat = this.resourceManager.getPbrMaterial(
      '083C633A-8E32-421E-992A-642A797F2ED3'
    );
    const glasses = new THREE.Mesh(glassesGeo, glassesMat);
    glasses.name = 'glasses';
    glasses.position.set(-7.68856049, 1.349442, 1.86637306);
    glasses.rotation.set(Math.PI / 2, 0, 0);
    glasses.scale.set(100, 100, 100);
    glasses.castShadow = true;
    glasses.receiveShadow = true;

    room.add(glasses);

    const floorGeo = this.resourceManager.getGeometry(
      'DBE59643-DF7A-4DF6-9322-5F188D4F8702'
    );
    const floorMat = this.resourceManager.getPbrMaterial(
      'DDE56D74-5F73-4D9B-81F3-41CDC7151C53'
    );

    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.name = 'floor';
    floor.position.set(-0.25743866, 1.42000043, 0.06832886);
    floor.rotation.set(Math.PI / 2, 0, 0);
    floor.castShadow = true;
    floor.receiveShadow = true;
    room.add(floor);

    const baseBoardsGeo = this.resourceManager.getGeometry(
      'CDF1CBC0-DBD7-4CF6-977F-26F43FFD3118'
    );
    const baseBoardsMat = this.resourceManager.getPbrMaterial(
      '047E2E45-295D-4964-8D25-A5491883413D'
    );
    const baseBoards = new THREE.Mesh(baseBoardsGeo, baseBoardsMat);
    baseBoards.name = 'baseboards';
    baseBoards.position.set(-0.25743866, 1.42000043, 0.06832886);
    baseBoards.rotation.set(Math.PI / 2, 0, 0);
    baseBoards.scale.set(100, 100, 100);
    baseBoards.castShadow = true;
    baseBoards.receiveShadow = true;
    room.add(baseBoards);

    const walls0011Geo = this.resourceManager.getGeometry(
      '48779A13-A79A-491A-B728-CF1D6BEC5BDA'
    );
    const walls0011Mat = this.resourceManager.getPbrMaterial(
      'A0140FE9-27A4-4A70-8439-D285AF8F5DD3'
    );
    const walls0011 = new THREE.Mesh(walls0011Geo, walls0011Mat);
    walls0011.name = 'walls.001 (1)';
    walls0011.position.set(1.38, 1.42000043, 0.06832886);
    walls0011.rotation.set(Math.PI / 2, 0, 0);
    walls0011.scale.set(125, 125, 125);
    walls0011.castShadow = true;
    walls0011.receiveShadow = true;
    room.add(walls0011);

    this.add(room);
  }
  addSuspendLamp() {
    const geo = this.resourceManager.getGeometry(
      '832E9283-AADD-4809-BF26-767F3CE26495'
    );
    const material = this.resourceManager.getPbrMaterial(
      'B897BCA4-D4FD-424B-A309-57C5D9E15F62'
    );
    const suspended_lamp = new THREE.Mesh(geo, material);
    suspended_lamp.name = 'suspended_lamp';
    suspended_lamp.position.set(2.144, 1.658, 0.141);
    suspended_lamp.rotation.set(1.5707964460041988, 0, 0);
    suspended_lamp.scale.set(100, 100, 100);
    suspended_lamp.renderOrder = 2;
    this.add(suspended_lamp);

    const pointLight = new THREE.PointLight(0xffffff, 0.35, 10, 2);
    pointLight.position.set(0, 0.00004, 0.00034);

    suspended_lamp.add(pointLight);

    suspended_lamp.add(
      this.parseMaterials([
        '7703184A-B1A8-4559-BDD4-E8C06CFDAD1A',
        'A3FD84E4-734E-4A7B-B2EA-4E6D2863CFF2',
        '6B7FBAD8-510D-4E8C-81A4-7185C6EDCD0E',
        '0291C9B5-F7A0-4279-B15B-F557C91AB239',
      ])
    );

    const suspendedLampStrokeGeo = this.resourceManager.getGeometry(
      '1CF488CC-89FD-47A7-BFC5-15D8135D49D5'
    );
    const suspendedLampStroke = new THREE.Mesh(suspendedLampStrokeGeo);
    suspendedLampStroke.name = 'suspended_lamp_stroke';
    suspendedLampStroke.visible = false;
    suspended_lamp.add(suspendedLampStroke);
    suspendedLampStroke.renderOrder = 1;
  }
  initLights() {
    const oceanLight = new THREE.DirectionalLight(0xfffff5, 1.53);
    oceanLight.name = 'ocean light';
    oceanLight.position.set(
      0.5190457349303298,
      0.46748745412110726,
      0.7155745979910129
    );
    this.add(oceanLight);

    const dirLight = new THREE.DirectionalLight(0xfffff5);
    dirLight.name = 'Directional Light';
    dirLight.position.set(
      0.589772676749984,
      0.46478763657997596,
      0.6604094507512435
    );
    dirLight.castShadow = true;
    dirLight.visible = false;
    const dirLightHelper = new THREE.DirectionalLightHelper(dirLight);
    this.add(dirLightHelper);
    this.add(dirLight);
  }
  initCameras() {
    const cameras = new THREE.Object3D();
    cameras.name = 'cameras';
    this.cameraInfos.forEach((info: any) => {
      const camera = new THREE.PerspectiveCamera(
        info.fov,
        info.aspect,
        info.near,
        info.far
      );
      camera.name = info.name;
      if (info.matrix) {
        const emptyMatrix = new THREE.Matrix4();
        emptyMatrix.fromArray(info.matrix);
        emptyMatrix.decompose(camera.position, camera.quaternion, camera.scale);
      } else {
        camera.position.copy(info.position);
        camera.rotation.copy(info.rotation);
      }
      if (info.target) {
        const target = new THREE.Object3D();
        target.position.copy(info.target);
        camera.add(target);
        const cameraHelper = new THREE.CameraHelper(camera);
        // cameras.add(cameraHelper);
      }
      cameras.add(camera);
    });
    this.add(cameras);
  }
}
