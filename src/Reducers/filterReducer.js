export default function reducer(state={},action){
    switch(action.type){
        case 'APPLY_FILTERS':
            // console.log('f',action.payload);
        return action.payload;
        default:
            return state;
    }
}