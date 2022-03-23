import useStore from '@/helpers/store'

const InstructionsMobile = ({ ready }) => {
  return (
    <>
      <button className='menu-mobile' onClick={() => useStore.setState({ uiLocked: true })}>
        <img width='18' src='/img/menu.svg' />
      </button>
      <div className={ready ? 'none' : 'overlay'}>
        <div className='start'>
          <button className='button-action' onClick={() => useStore.setState({ uiLocked: false })}>
            Enter World
          </button>
        </div>
        <img className={ready ? '' : 'controlsL'} src='/img/mousemove.png' alt='Move: Joystick'></img>
        <img className={ready ? '' : 'controlsR'} src='/img/mouseclick.png' alt='Look: Fingers'></img>
      </div>
      <div className='dot' style={{ pointerEvents: ready ? 'none' : 'all' }} />
    </>
  )
}

export default InstructionsMobile
