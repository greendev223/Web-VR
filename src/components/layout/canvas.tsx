import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import * as THREE from 'three'

const LCanvas = ({ children }) => {
  return (
    <Canvas
      raycaster={{
        computeOffsets: (_, { size: { width, height } }) => {
          return {
            offsetX: width / 2,
            offsetY: height / 2
          }
        }
      }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}
    >
      <Preload all />
      {children}
    </Canvas>
  )
}

export default LCanvas
