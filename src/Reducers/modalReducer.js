const initialModalState = {
  isOpen: false,
  data: {}
}
export default function reducer (state = initialModalState, action) {
  switch (action.type) {
    case 'SET_MODAL_STATE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
