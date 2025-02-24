import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state,action)=>{
            return null;
        }
    }
})
export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;

// here we are creating a slice of user which will have two actions addUser and removeUser
// addUser will take the state and action as parameter and return the action.payload
//payload is the data that we are passing to the action from the component
// removeUser will take the state and action as parameter and return null
// we are exporting the addUser and removeUser and the reducer