import { useMemo } from 'react'
import { usePlane } from '@react-three/cannon'
import * as THREE from 'three'
import { MeshReflectorMaterial } from '@react-three/drei'

const Ground = () => {
  let marbleAlphaMap = null
  let marbleMap = null
  let marbleNormalMap = null
  let grassMap = null
  const size = 4.6

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.10, 22]
  }))

  marbleMap = useMemo(() => new THREE.TextureLoader().load('/Textures/BazaltMarble/BAZALT-diffuse.jpg'), [])
  marbleMap.wrapS = THREE.MirroredRepeatWrapping
  marbleMap.wrapT = THREE.MirroredRepeatWrapping
  marbleMap.repeat.set(size, size)

  marbleAlphaMap = useMemo(() => new THREE.TextureLoader().load('/Textures/BazaltMarble/BAZALT-ao.jpg'), [])
  marbleAlphaMap.wrapS = THREE.MirroredRepeatWrapping
  marbleAlphaMap.wrapT = THREE.MirroredRepeatWrapping
  marbleAlphaMap.repeat.set(size, size)

  marbleNormalMap = useMemo(() => new THREE.TextureLoader().load('/Textures/BazaltMarble/BAZALT-normal.jpg'), [])
  marbleNormalMap.wrapS = THREE.MirroredRepeatWrapping
  marbleNormalMap.wrapT = THREE.MirroredRepeatWrapping
  marbleNormalMap.repeat.set(size, size)

  grassMap = useMemo(() => new THREE.TextureLoader().load('/Textures/Grass/GrassGreenTexture0002.jpg'), [])
  grassMap.wrapS = THREE.RepeatWrapping
  grassMap.wrapT = THREE.RepeatWrapping
  grassMap.repeat.set(70, 70)

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 22]}>
        <planeBufferGeometry attach='geometry' args={[1000, 1000]} />
        <meshLambertMaterial attach='material'>
          <primitive attach='map' object={grassMap} />
        </meshLambertMaterial>
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 22]}>
        {/* @ts-ignore */}
        <MeshReflectorMaterial>
          <planeBufferGeometry attach='geometry' args={[70, 75]} />
        </MeshReflectorMaterial>
      </mesh>

      <mesh ref={ref} receiveShadow>
        <planeBufferGeometry attach='geometry' args={[70, 75]} />
        <meshPhysicalMaterial
          attach='material'
          reflectivity={0}
          clearcoat={1}
          transparent
          roughness={0.5}
          metalness={0.3}
        >
          <primitive attach='map' object={marbleMap} />
          <primitive attach='alphaMap' object={marbleAlphaMap} />
          <primitive attach='normalMap' object={marbleNormalMap} />
        </meshPhysicalMaterial>
      </mesh>
    </>
  )
}

export default Ground
