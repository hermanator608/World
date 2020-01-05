import React from 'react';
import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import Stats from 'stats.js';

var stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

class Renderer extends React.Component {
  private mount: HTMLDivElement  | null = null;

  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      5000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (this.mount) {
      this.mount.appendChild(renderer.domElement);
    }

    const light2 = new THREE.DirectionalLight(0xffffff);
    light2.position.set(30, 0, 900);
    light2.lookAt(0, 0, 0);
    scene.add(light2);

    // model
    const loader = new GLTFLoader();
    let world: GLTF | undefined;
    loader.load(
      './LowPolyEarth/scene.gltf',
      // 'https://threejsfundamentals.org/threejs/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf',
      (gltf) => {
        world = gltf;
        gltf.scene.scale.set(0.01, 0.01, 0.01)
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    const axesHelper = new THREE.AxesHelper(200);
    scene.add( axesHelper );

    camera.position.set(20, 0, 100);
    camera.lookAt(0,0,0)

    const animate = () => {
      stats.begin();

      requestAnimationFrame(animate);

      // sphere.rotation.x += 0.05;
      // sphere.rotation.y += 0.01;
      if (world) {
        world.scene.rotation.y += 0.01;
      }

      stats.end();

      renderer.render(scene, camera);
    };

    animate();
  }

  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}

export default Renderer;
