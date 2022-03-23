import { useMemo } from 'react'
import * as THREE from 'three'

const PointLight = ({ position, intensity }) => {
  const light = useMemo(() => new THREE.PointLight(0xffffff), [])

  return (
    <>
      <primitive object={light} position={position} intensity={intensity} />
    </>
  )
}

export default PointLight
