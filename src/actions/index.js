export const createNote=(data)=>{
    console.log('action',data);
    return {
        type:'CREATE_NOTE',
        payload:data
    }
}
export const deleteNote=(id)=>{
    console.log('deleteaction',id);
    return {
        type:'DELETE_NOTE',
        payload:id
    }
}
export const editNote=(data)=>{
    return {
        type:'EDIT_NOTE',
        payload:data
    }
}
export const sortAscending=()=>{
    return{
        type:'SORT_ASCE',
        payload:null
    }
}
export const sortDescending=()=>{
    return{
        type:'SORT_DESC',
        payload:null
    }
}
export const applyFilters=(data)=>{
    return{
        type:'APPLY_FILTERS',
        payload:data
    }
}