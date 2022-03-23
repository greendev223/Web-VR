import { useTransition, animated } from 'react-spring'

import useStore from '@/helpers/store'

const Modal = ({ children }) => {
  const modalState = useStore((s) => s.modal)

  const transitions = useTransition(modalState, {
    from: { opacity: 0, transform: 'translate(-50%, -40%)' },
    enter: { opacity: 1, transform: 'translate(-50%, -50%)' },
    leave: { opacity: 0, transform: 'translate(-50%, -40%)' }
  })

  const handleCloseModal = () => {
    useStore.setState({ uiLocked: false })
    useStore.setState({ startWorld: true })
    useStore.setState({ modal: false })
  }

  return (
    <>
      {transitions(
        (props, item, key) =>
          item && (
            <animated.div style={{ opacity: props.opacity, transform: props.transform }} className='modal'>
              <div className='modal-header'>
                <button onClick={handleCloseModal}>X</button>
              </div>
              {children}
            </animated.div>
          )
      )}
    </>
  )
}

export default Modal
