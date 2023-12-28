export default function reducer (state = {}, action) {
  switch (action.type) {
    case 'APPLY_FILTERS':
      return action.payload
    default:
      return state
  }
}
