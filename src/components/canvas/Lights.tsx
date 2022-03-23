import SpotLight from '@/components/canvas/SpotLight'
import PointLight from '@/components/canvas/PointLight'
import DirectionalLight from '@/components/canvas/DirectionalLight'

const Lights = ({ night, performance }) => {
  return (
    <>
      <ambientLight intensity={night ? 0.02 : 0.2} />
      {/* moon/sunlight */}
      <DirectionalLight
        position={[29, 50, -60]}
        target={[-5, -3, 50]}
        intensity={night ? 0.2 : 0.3}
        color={night ? 'skyblue' : 'lightgoldenrodyellow'}
        shadowCamBot={-30}
        shadowCamTop={30}
        shadowCamL={53}
        shadowCamR={-53}
      />
      {/* moon light */}
      {night ? (
        <SpotLight
          position={[0, 80, -120]}
          target={[80, 150, -200]}
          intensity={0.5}
          penumbra={0.5}
          sNormalBias={0}
          sBias={0}
          angle={-Math.PI}
          decay={2}
        />
      ) : null}
      <PointLight intensity={performance ? 0.025 : 0.06} position={[0, 19, 13]} />
      {performance ? (
        <>
          <SpotLight
            position={[12, 19.5, 0]}
            target={[21, 4, 0]}
            intensity={1.5}
            penumbra={0.5}
            sNormalBias={0.05}
            sBias={0}
            angle={Math.PI / 10}
            decay={2}
          />
          <SpotLight
            position={[12, 19.5, 25]}
            target={[21, 4, 25]}
            intensity={1.5}
            penumbra={0.5}
            sNormalBias={0.05}
            sBias={0}
            angle={Math.PI / 10}
            decay={2}
          />
          <SpotLight
            position={[-12, 19.5, 0]}
            target={[-21, 4, 0]}
            intensity={1.5}
            penumbra={0.5}
            sNormalBias={0.05}
            sBias={0}
            angle={Math.PI / 10}
            decay={2}
          />
          <SpotLight
            position={[-12, 19.5, 25]}
            target={[-21, 4, 25]}
            intensity={1.5}
            penumbra={0.5}
            sNormalBias={0.05}
            sBias={0}
            angle={Math.PI / 10}
            decay={2}
          />
          <SpotLight
            position={[28, 18, 12]}
            target={[34.5, 13, 12]}
            intensity={1}
            penumbra={0.5}
            sNormalBias={0}
            sBias={-0.001}
            angle={Math.PI / 4}
            decay={2}
          />
          <SpotLight
            position={[-28, 18, 12]}
            target={[-34.5, 13, 12]}
            intensity={1}
            penumbra={0.5}
            sNormalBias={0}
            sBias={-0.001}
            angle={Math.PI / 4}
            decay={2}
          />
        </>
      ) : null}
    </>
  )
}

export default Lights
