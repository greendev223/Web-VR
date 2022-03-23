import { useState } from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

import useStore from '@/helpers/store'

const Picture = ({ data, scale, position, rotation }) => {
  const texture = useLoader(THREE.TextureLoader, data.url)

  return (
    <mesh
      position={position}
      rotation={rotation}
      scale={scale}
      metalness={0.9}
      roughness={0.9}
      onPointerOver={(e) => useStore.setState({ focusedArtwork: data })}
      onPointerOut={(e) => useStore.setState({ focusedArtwork: {} })}
    >
      <planeBufferGeometry attach='geometry' args={[4, 4]} />
      <meshBasicMaterial attach='material' map={texture} toneMapped={false} />
    </mesh>
  )
}

export default Picture
