import { useMemo } from 'react'
import { useBox } from '@react-three/cannon'
import * as THREE from 'three'

const Display = ({ position, size }) => {
  let alphaMap = null
  let diffuseMap = null
  let normalMap = null

  const [ref] = useBox(() => ({
    type: 'Static',
    args: [0.1, 16.5, 2],
    position
  }))

  alphaMap = useMemo(() => new THREE.TextureLoader().load('/Textures/BiancoMarble/BIANCO-ao.jpg'), [])

  diffuseMap = useMemo(() => new THREE.TextureLoader().load('/Textures/BiancoMarble/BIANCO-diffuse.jpg'), [])

  normalMap = useMemo(() => new THREE.TextureLoader().load('/Textures/BiancoMarble/BIANCO-normal.jpg'), [])

  return (
    <>
      <mesh ref={ref} receiveShadow castShadow>
        <boxBufferGeometry attach='geometry' args={size} />
        <meshPhysicalMaterial attach='material' clearcoat={1} roughness={0.5}>
          <primitive attach='alphaMap' object={alphaMap} />
          <primitive attach='map' object={diffuseMap} />
          <primitive attach='normalMap' object={normalMap} />
        </meshPhysicalMaterial>
      </mesh>
    </>
  )
}

export default Display
