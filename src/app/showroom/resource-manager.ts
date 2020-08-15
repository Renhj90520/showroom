import { Injectable } from '@angular/core';
import * as THREE from 'three';
import * as _ from 'lodash';
import Cacher from './cacher';
import CompressedTextureLoader from './compressed-texture-loader';
import CustomFileLoader from './custom-file-loader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { imagesInfo } from './images';
import { textures } from './textures';
import { pbrmaterials } from './materials';
import CustomMaterialLoader from './CustomMaterialLoader';
@Injectable()
export class ResourceManager {
  geometriesUUID = [
    '894051E4-5885-411E-8A17-5BE4750089BF',
    '92208585-35D3-438A-89C0-B834D3B26076',
    '1C260299-607E-4ADF-8187-CF5F5221848F',
    '0824BCC7-3AF3-43D0-BF47-27A201FE8CBE',
    '7F214C00-829F-4423-951F-FF8F6CC39D0A',
    '6BEF0AD0-9D12-4539-9C52-FC6D4C15D4F2',
    '21AE0C66-2162-46C6-9F0D-BA2CD7D12BED',
    '7BAB12B2-BFEA-462B-B8A0-D18702AF0950',
    '45EE2001-E129-402E-8624-9D1EC077CC4A',
    'F62523DB-D182-4D9D-BBCE-63D6F5F44153',
    '5E7587B0-0F7C-456C-BFA4-4651D9CB353F',
    'F11D3DBB-B856-4DB2-9AD5-3952EA9F4CB5',
    '6B38999E-A719-49E7-8F6A-E8975045BAD8',
    '1D037CD9-3246-4042-B8B6-3600556C12E1',
    '83EA3A0C-0B70-4565-B1AB-845E328F29F9',
    'EFF0C7B3-EA3A-4CF0-835D-022C3B876CD9',
    '14C5888D-FF58-4C30-A4FD-11A05F04FE5F',
    '3D86EE0A-6E08-42BB-A4DD-A235CA6FC7CB',
    '028BBF08-45BD-4CB4-B022-8EC27F7D16D7',
    '832E9283-AADD-4809-BF26-767F3CE26495',
    '6823E7EE-ED1D-4CC9-8B54-F6E71BAD234C',
    '98A774A8-4C70-43A2-B208-A94F449F9C91',
    'D1C65BFD-75D1-4D0A-A80F-CD326389BF49',
    '1CF488CC-89FD-47A7-BFC5-15D8135D49D5',
    '7DCE8ED1-9270-4A7C-AB77-1516928E00A0',
    '477FDEB5-0DF1-4DA8-B167-792850EF8AEE',
    '227D58DA-AD40-4BA5-8E62-A7528C613869',
    '657ACF8F-A290-49D9-A6B4-435DACD851C8',
    '188E1DBD-3687-4D3B-82F5-42B016C65B89',
    'A6610340-6645-4108-A390-15CC1F824341',
    'FC04B211-C5BE-464D-B441-646E400068F0',
    '6E8E848E-5FF9-43BD-A059-A85135E522C3',
    'AF378BC5-E906-422C-A407-D2D886E110AD',
    '01C473D6-7196-4056-977B-06C95E5413B4',
    'EE428753-A0E0-4A78-A2EB-B7C03C74D88D',
    '02E64E6E-F972-4073-8910-020852FBC4D5',
    '5D693ADF-41F5-43C9-808F-CA52FB240637',
    '8389FF23-1F7E-47FB-99C7-A79DEB3F80AD',
    '810754A5-A7F2-4590-B399-B8AF35D0913F',
    '7B92A517-2210-45C2-95EF-A143116A62F6',
    '3A1EFBC9-BD1B-445B-AF2C-A8338BD830C3',
    '829A3926-6304-456F-B714-7B472B63933C',
    '0447F8F9-E1A9-4DD8-91BD-8B037787D704',
    '1ACD3173-8269-48B8-B625-E44EC6E5B9DD',
    'E08CB4C3-862D-4B8B-AAC5-4C50A8E1EF58',
    'CF47C4D3-325E-47F6-BD05-31ECF622A49B',
    '65E3910E-2A9A-44BB-B7F1-78268FE37A98',
    '0097DA9B-4A2C-404E-9EED-FE06B5F797FA',
    '6498D32D-D7DA-4861-B8AA-67509FED7D92',
    '0F2258D9-DF5B-4476-85E5-47A5B9E9BA8C',
    '48779A13-A79A-491A-B728-CF1D6BEC5BDA',
    'BBA7C1FD-F325-4D86-997B-D60D02360321',
    'C4E6105E-A623-452A-87C6-0B967F7C6804',
    'DBE59643-DF7A-4DF6-9322-5F188D4F8702',
    'CDF1CBC0-DBD7-4CF6-977F-26F43FFD3118',
    '9E812446-BE94-4973-99FC-20C9F5A45E23',
    '0CA9F8C9-DC34-47DC-8F6A-EC572A2ED7DD',
    '967028F2-A24F-497C-8AB0-23AA0DC97283',
    'CAB992F7-75BE-4DC2-86A1-EB178272E4AC',
    '77C97091-0D57-4ABF-9F0E-09DC9EC0DB09',
    '206F692A-DB60-4018-9A55-4C7A75AFF2FB',
    '6D47EC52-2ED7-4184-AAFA-EBD52A1372BD',
    '6278E2F9-1D1C-482B-B427-77641AA911C9',
    '74155BC7-710E-4092-85DE-D5672B68843D',
    '53F0ED92-8BA3-4F62-925C-463014CB2071',
    '0440AD87-6137-449C-9FC3-86340B6B11ED',
    'EFB5AE34-A34C-4F9B-AED8-C1FC253FCF18',
    'BEE341AA-FDB0-44B0-AF3B-BBD23A6B78E5',
  ];
  sh = ['room', 'studio'];
  textures = [
    'textures/white.png',
    'textures/normal.png',
    'textures/waternormals.jpg',
    'textures/marker.png',
    'textures/circle.png',
    'textures/corner-gradient.png',
    'textures/flare.png',
  ];
  cubemaps = ['room/cubemap.bin'];
  basePath = '/assets/showroom';
  environmentPath = '/assets/showroom/environments';
  loadingManager;

  private _texturePath: string;
  textureCache: Cacher;
  cubemapCache: Cacher;
  imageCache: Cacher;
  customFileLoader: CustomFileLoader;
  geometries = {};
  shes = {};
  pbrTextures = {};
  pbrMaterials = {};

  public get texturePath(): string {
    return this._texturePath;
  }
  public set texturePath(path: string) {
    this._texturePath = path;
  }

  constructor() {
    this.loadingManager = new THREE.LoadingManager();
    const textures = {};
    this.textureCache = new Cacher(
      new THREE.TextureLoader(this.loadingManager),
      textures
    );
    this.cubemapCache = new Cacher(
      new CompressedTextureLoader(256, false, this.loadingManager)
    );

    this.imageCache = new Cacher(new THREE.ImageLoader(this.loadingManager));

    this.customFileLoader = new CustomFileLoader(this.loadingManager);
  }

  loadSingle(path, fileName, cache, onLoad) {
    cache.load(
      path,
      function (result) {
        result.fileName = fileName;
        onLoad(arguments.length > 1 ? _.toArray(arguments) : result);
      },
      () => {},
      () => {
        throw new Error('Resource was not found: ' + path);
      },
      fileName
    );
  }
  loadAll(filePaths, assetPath, cache, onComplete?) {
    filePaths = filePaths || [];
    let loaded = 0;
    _.map(filePaths, (filePath) => {
      this.loadSingle(`${assetPath}/${filePath}`, filePath, cache, (result) => {
        loaded++;
        if (loaded === filePaths.length && onComplete) {
          onComplete();
        }
      });
    });
  }

  loadImages(onComplete) {
    let count = 0;
    _.map(imagesInfo, (imageInfo) => {
      this.imageCache.load(
        imageInfo.url,
        () => {
          count++;
          if (count === imagesInfo.length) {
            onComplete();
          }
        },
        null,
        () => {
          count++;
          if (count === imagesInfo.length) {
            onComplete();
          }
        },
        imageInfo.uuid
      );
    });
  }

  loadTextures(assetPath?, onComplete?) {
    this.loadAll(
      this.textures,
      assetPath || this.texturePath || this.basePath,
      this.textureCache,
      onComplete
    );
  }

  loadSpecularCubemaps(assetPath?, onComplete?) {
    this.loadAll(
      this.cubemaps,
      assetPath || this.environmentPath,
      this.cubemapCache,
      onComplete
    );
  }

  loadSH(onComplete?) {
    let count = 0;
    this.sh.forEach((shpath) => {
      const path = `${this.environmentPath}/${shpath}/irradiance.json`;
      this.customFileLoader.load(
        path,
        (sh) => {
          this.shes[shpath] = sh;
          count++;
          if (count === this.sh.length && onComplete) {
            onComplete();
          }
        },
        () => {},
        () => {
          console.error('Resource was not found: ' + path);
        }
      );
    });
  }

  loadAllGeometries(onComplete?) {
    let count = 0;
    this.geometriesUUID.forEach((geoUUID) => {
      const path = `/assets/showroom/gltfs/${geoUUID}.gltf`;
      const gltfLoader = new GLTFLoader(this.loadingManager);
      gltfLoader.load(
        path,
        (gltf) => {
          this.geometries[geoUUID] = (gltf.scene.children[0] as any).geometry;
          count++;
          if (count === this.geometriesUUID.length) {
            onComplete();
          }
        },
        null,
        () => {
          count++;
          this.geometries[geoUUID] = null;
          if (count === this.geometriesUUID.length) {
            onComplete();
          }
        }
      );
    });
  }

  parseAllPbrTextures() {
    textures.forEach((textureInfo: any) => {
      let texture;
      if (textureInfo.images) {
        const cubeImages = [];
        for (let j = 0; j < textureInfo.images.length; j++) {
          const imageId = textureInfo.images[j];
          if (!this.getImage(imageId)) {
            console.warn('THREE.ObjectLoader: Undefined image', imageId);
          }
          cubeImages.push(this.getImage(imageId));
        }
        texture = new THREE.CubeTexture(cubeImages);
      } else {
        if (!textureInfo.image) {
          console.warn(
            'THREE.ObjectLoader: No "image" specified for',
            textureInfo.uuid
          );
        }
        if (!this.getImage(textureInfo.image)) {
          console.warn(
            'THREE.ObjectLoader: Undefined image',
            textureInfo.image
          );
        }
        texture = new THREE.Texture(this.getImage(textureInfo.image));
        texture.needsUpdate = true;
        texture.uuid = textureInfo.uuid;
        if (textureInfo.name) {
          texture.name = textureInfo.name;
        }
        if (textureInfo.mapping) {
          texture.mapping = textureInfo.mapping;
        }
        if (textureInfo.offset) {
          texture.offset.fromArray(textureInfo.offset);
        }
        if (textureInfo.repeat) {
          texture.repeat.fromArray(textureInfo.repeat);
        }
        if (textureInfo.wrap) {
          texture.wrapS = textureInfo.wrap[0];
          texture.wrapT = textureInfo.wrap[1];
        }
        if (textureInfo.minFilter) {
          texture.minFilter = textureInfo.minFilter;
        }
        if (textureInfo.magFilter) {
          texture.magFilter = textureInfo.magFilter;
        }
        if (textureInfo.anisotropy) {
          texture.anisotropy = textureInfo.anisotropy;
        }
        if (textureInfo.flipY !== undefined) {
          texture.flipY = textureInfo.flipY;
        }

        this.pbrTextures[textureInfo.uuid] = texture;
      }
    });
  }

  getPbrTexture(uuid) {
    return this.pbrTextures[uuid];
  }

  getTexture(path) {
    return this.textureCache.get(path);
  }

  getCubemap(path) {
    return this.cubemapCache.get(path + '/cubemap.bin');
  }

  getSH(path) {
    return this.shes[path];
  }

  getGeometry(uuid) {
    return this.geometries[uuid];
  }

  getImage(uuid) {
    return this.imageCache.get(uuid);
  }

  load(onComplete) {
    let count = 0;
    const loaded = () => {
      count++;
      if (count === 5) {
        this.parseMaterials();
        onComplete();
      }
    };
    this.loadSpecularCubemaps(null, loaded);
    this.loadSH(loaded);
    this.loadImages(() => {
      this.parseAllPbrTextures();
      loaded();
    });
    this.loadTextures(null, loaded);
    this.loadAllGeometries(loaded);
  }
  parseMaterials() {
    const materialLoader = new CustomMaterialLoader(this);
    materialLoader.setTextures(this.pbrTextures);
    pbrmaterials.forEach((materialInfo) => {
      if (materialInfo.type === 'ShaderMaterial') {
        materialInfo.color = undefined;
      }
      const material: any = materialLoader.parse(materialInfo);
      if (material.type === 'MultiMaterial') {
        this.pbrMaterials[material.uuid] = material.materials;
      } else {
        this.pbrMaterials[material.uuid] = material;
      }
    });
    console.log(this.pbrMaterials);
  }
  getPbrMaterial(uuid) {
    return this.pbrMaterials[uuid];
  }
}
