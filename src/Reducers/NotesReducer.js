export default function reducer(state = {}, action) {
  switch (action.type) {
    case "CREATE_NOTE":
      console.log("reducer", action.payload);
      return { [action.payload.id]: action.payload, ...state };
    case "DELETE_NOTE":
      delete state[action.payload];
      return { ...state };
    case "EDIT_NOTE":
      return { [action.payload.id]: action.payload, ...state };
    case "SORT_ASCE": 
      const ordered = Object.keys(state).sort((a, b) => {
        return state[a].createdAt - state[b].createdAt;
      });
      const ascending = {};
      ordered.forEach((key) => {
        ascending[key] = state[key];
      });
      console.log('Ascen',ascending);
      return ascending;
    case "SORT_DESC":
        const order = Object.keys(state).sort((a, b) => {
            return state[b].createdAt - state[a].createdAt;
          });
      const descending = {};
      order.forEach((key) => {
        descending[key] = state[key];
      });
      console.log(descending);
      return descending;
    default:
      return state;
  }
}
