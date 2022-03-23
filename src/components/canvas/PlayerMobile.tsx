import dynamic from 'next/dynamic'

const FPSControls = dynamic(() => import('@/components/canvas/FPSControls'), { ssr: false })

const PlayerMobile = () => {
  return (
    <FPSControls
      camProps={{
        makeDefault: true,
        fov: 80,
        position: [0, 2.537, 0.7]
      }}
      orbitProps={{
        target: [0, 2.537, 0]
      }}
      enableJoystick
    />
  )
}

export default PlayerMobile
