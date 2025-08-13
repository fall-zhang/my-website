> Create by **fall** on 11 Aug 2025<br/>
> Recently revised in 11 Aug 2025

## threejs

three.js 其实是使用 WebGL 来绘制三维效果的，WebGL是一个只能画点、线和三角形的非常底层的系统，它封装了诸如场景、灯光、阴影、材质、贴图、空间运算等一系列功能，让你不必要再从底层 WebGL 开始写起。

安装

```
pnpm i three
pnpm i @types/three
```

### 模块

- `WebGLRenderer` 渲染器
- `PerspectiveCamera` 相机视角
- `Scene` 场景
- `Light` 光源
- `Group` 群组
- `Object3D` 三维物体
- `Mesh` 网格对象，将图形和网格材质合并，用一种特定的
  - `MeshNormalMaterial` 

- `Geometry` 几何图形，如球体、立方体、平面、狗
  - `BoxGeometry` 正方形
- `Material` 材质，几何体的表面属性，要么画布上生成，要么由另一个场景渲染出图像
- `Light` 光源

### 示例

```js
import * as THREE from 'three';

const canvasEle = document.querySelector('canvas')
const rectInfo = canvasEle.getBoundingClientRect()
const width = rectInfo.width, height = rectInfo.height;

// 创建一个透视相机
// 视野范围，宽高比，近平面，远平面，在此范围外的内容都会被裁剪掉
const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
const renderer = new THREE.WebGLRenderer({ 
  antialias: true,
  canvas:canvasEle
});
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );

// animation
function animate( time ) {
	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );
}
```







## 参考文章

| 作者 | 文章名称 |
| ---- | -------- |
|      |          |

