import { useEffect, useRef } from 'react'
import { extend, ReactThreeFiber, useThree } from '@react-three/fiber'
import { PointerLockControls as PointerLockControlsExt } from 'three/examples/jsm/controls/PointerLockControls'

import useStore from '@/helpers/store'

extend({ PointerLockControlsExt })

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      pointerLockControlsExt: ReactThreeFiber.Object3DNode<PointerLockControlsExt, typeof PointerLockControlsExt>
    }
  }
}

const PointerLockControls = (props) => {
  const { camera, gl } = useThree()
  const controls = useRef(null)
  const startWorld = useStore((s) => s.startWorld)
  const modalState = useStore((s) => s.modal)

  const handleLockControls = () => {
    controls.current.unlock()
  }

  const handleUnlockControls = () => {
    controls.current.lock()
  }

  useEffect(() => {
    handleLockControls()
  }, [])

  useEffect(() => {
    if (startWorld) {
      handleUnlockControls()
      useStore.setState({ startWorld: false })
    }
  }, [startWorld])

  useEffect(() => {
    if (modalState) {
      handleLockControls()
    }
  }, [modalState])

  return <pointerLockControlsExt ref={controls} args={[camera, gl.domElement]} {...props} />
}

export default PointerLockControls
