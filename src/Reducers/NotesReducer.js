export default function reducer (state = {}, action) {
  switch (action.type) {
    case 'CREATE_NOTE':
      return { [action.payload.id]: action.payload, ...state }
    case 'DELETE_NOTE':
      delete state[action.payload]
      return { ...state }
    case 'EDIT_NOTE':
      return {
        ...state,
        [action.payload.id]: { ...state[action.payload.id], ...action.payload }
      }
    case 'SORT_ASCE':{
      const ordered = Object.keys(state).sort((a, b) => {
        return state[a].createdAt - state[b].createdAt
      })
      const ascending = {}
      ordered.forEach((key) => {
        ascending[key] = state[key]
      })
      return ascending
    }
    case 'SORT_DESC':{
      const order = Object.keys(state).sort((a, b) => {
        return state[b].createdAt - state[a].createdAt
      })
      const descending = {}
      order.forEach((key) => {
        descending[key] = state[key]
      })
      return descending
    }
    default:
      return state
  }
}
