import create from 'zustand'

const useStore = create(() => {
  return {
    router: null,
    dom: null,
    artworks: [],
    focusedArtwork: {},
    selectArtwork: {},
    modal: false,
    uiLocked: true,
    startWorld: false,
    playerPosition: [0, 0, 0],
    nextPlayerPosition: [0, 0, 0]
  }
})

export default useStore
