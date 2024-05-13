// use three inside the file
import * as THREE from 'three'

// Canvas
// get canvas from html
const canvas = document.querySelector('canvas.webgl')


const scene = new THREE.Scene()

// object
// geometry
const geometry = new THREE.BoxGeometry(1, 1, 1)
// material                                       {}: object. required
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 ,wireframe: true})
// mesh
const mesh = new THREE.Mesh(geometry, material)

// add mesh to the scene
scene.add(mesh)

// sizes
const size = {
  width: 800,
  height: 600
}

// Camera VofP: 75 out of 360
const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
camera.position.z = 3
scene.add(camera)

// render use webGLrenderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
// reset size of the canvas
renderer.setSize(size.width, size.height)

renderer.render(scene, camera)
