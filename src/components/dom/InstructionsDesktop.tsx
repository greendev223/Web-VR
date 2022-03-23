import useStore from '@/helpers/store'

const InstructionsDesktop = ({ ready }) => {
  return (
    <>
      <div className={ready ? 'none' : 'overlay'}>
        <div className='start'>
          <button className='button-action' onClick={() => useStore.setState({ startWorld: true })}>
            Enter World
          </button>
        </div>
        <img className={ready ? '' : 'controlsL'} src='/img/ControlsL.png' alt='Move: WASD	Jump: SPACE Run: SHIFT'></img>
        <img className={ready ? '' : 'controlsR'} src='/img/ControlsR.png' alt='Look: MOUSE'></img>
        <img
          className={ready ? '' : 'controlsTR'}
          src='/img/ControlsTR.png'
          alt='Toggle Performance: P Toggle Night Mode: N'
        ></img>
      </div>
      <div className='dot' style={{ pointerEvents: ready ? 'none' : 'all' }} />
    </>
  )
}

export default InstructionsDesktop
