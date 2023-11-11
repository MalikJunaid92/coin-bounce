import { createSlice } from ("@reduxjs/toolkit");

const initailState={
    id:'',
    email:'',
    username:'',
    auth:false
}
export const userSlice=createSlice({
    name:'user',
    initailState,
    reducers:{
        setUser:(state,action)=>{
            state.id = action.payload.id;
    },
    resetUser:(state,action)=>{}
}
})
export const{setUser,resetUser}=userSlice.actions;
export default userSlice.reducers