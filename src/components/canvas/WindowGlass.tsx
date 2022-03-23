import { useState, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

const WindowGlass = ({ position }) => {
  let newMaterial = null
  const [model, setModel] = useState<any>()

  newMaterial = new THREE.MeshPhysicalMaterial({
    color: 'skyblue'
  })

  useEffect(() => {
    new GLTFLoader().load('/3D/WindowGlass/scene.gltf', setModel)
  }, [])

  return model ? (
    <primitive
      renderOrder={1}
      scale={[4, 4, 4]}
      position={[0, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      object={model.scene}
      shadows={model.scene.traverse(function (child) {
        if (child.isMesh) {
          child.material = newMaterial
          child.material.transparent = true
          child.material.opacity = 0.3
          child.material.clearcoat = 1
          child.material.roughness = 0
          child.material.metalness = 1
        }
      })}
    ></primitive>
  ) : null
}

export default WindowGlass
