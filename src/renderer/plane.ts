import * as THREE from 'three';

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const plane = new THREE.Mesh( geometry, material );

export default plane;
