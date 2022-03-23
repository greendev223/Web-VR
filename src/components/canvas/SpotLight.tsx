import { useMemo } from 'react'
import * as THREE from 'three'

const SpotLight = ({ position, target, intensity, penumbra, sNormalBias, sBias, angle, decay }) => {
  const light = useMemo(() => new THREE.SpotLight(0xffffff), [])
  return (
    <>
      <primitive
        object={light}
        castShadow
        position={position}
        intensity={intensity}
        penumbra={penumbra}
        shadow-bias={sBias}
        shadow-normalBias={sNormalBias}
        angle={angle}
        decay={decay}
      />
      <primitive object={light.target} position={target} />
    </>
  )
}

export default SpotLight
