export const adminreducer=(state,action)=>{
    if(action.type==='ADMIN'){
        return action.payload;
    }
    return state;
}