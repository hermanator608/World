import * as THREE from 'three';

const RADIUS = 200;
const SEGMENTS = 50;
const RINGS = 50;

var geometry = new THREE.SphereGeometry( 5, 32, 5 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( geometry, material );

export default sphere;
