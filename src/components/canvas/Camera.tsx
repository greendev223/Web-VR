import { useRef, useEffect } from 'react'
import { useThree } from '@react-three/fiber'

const Camera = (props) => {
  const ref = useRef()
  const { set } = useThree()

  useEffect(() => {
    set(ref.current)
  }, [set])  

  return <perspectiveCamera ref={ref} />
}

export default Camera
