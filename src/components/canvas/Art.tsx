import Picture from '@/components/canvas/Picture'
import Display from '@/components/canvas/Display'

import useStore from '@/helpers/store'

const Art = (): JSX.Element => {
  const artworks = useStore((s) => s.artworks)

  return (
    <>
      {artworks.length > 0 && (
        <>
          <Picture data={artworks[0]} position={[19.3, 7, 0]} rotation={[0, -1.6, 0]} scale={[2, 2, 2]} />
          <Display position={[20, 5, 0]} size={[1, 18, 11]} />

          <Picture data={artworks[1]} position={[34.7, 12, 12]} rotation={[0, -1.6, 0]} scale={[4, 4, 4]} />

          <Picture data={artworks[2]} position={[19.3, 7, 25]} rotation={[0, -1.6, 0]} scale={[2, 2, 2]} />
          <Display position={[20, 5, 25]} size={[1, 18, 11]} />

          <Picture data={artworks[3]} position={[-19.3, 7, 0]} rotation={[0, 1.6, 0]} scale={[2, 2, 2]} />
          <Display position={[-20, 5, 0]} size={[1, 18, 11]} />

          <Picture data={artworks[4]} position={[-19.4, 7, 25]} rotation={[0, 1.6, 0]} scale={[2, 2, 2]} />
          <Display position={[-20, 5, 25]} size={[1, 18, 11]} />

          <Picture data={artworks[5]} position={[-34.6, 10, 12]} rotation={[0, 1.6, 0]} scale={[4, 4, 4]} />
        </>
      )}
    </>
  )
}

export default Art
