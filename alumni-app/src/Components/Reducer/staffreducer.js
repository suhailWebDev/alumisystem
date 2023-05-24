export const staffreducer=(state,action)=>{
    if(action.type==='STAFF'){
        return action.payload;
    }
    return state;
}