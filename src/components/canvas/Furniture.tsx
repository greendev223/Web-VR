import Bench from '@/components/canvas/Bench'

const Furniture = () => {
  return (
    <>
      <Bench
        url={'/3D/Bench/scene.gltf'}
        scale={[0.11, 0.11, 0.11]}
        position={[0, 0, 3]}
        rotation={[0, 0, 0]}
        physicsSize={[10, 3, 1]}
        physicsPosition={[0, 0, 3]}
      />
    </>
  )
}

export default Furniture
