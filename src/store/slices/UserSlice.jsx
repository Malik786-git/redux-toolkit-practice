import { createSlice } from "@reduxjs/toolkit";

const usersSlice  = createSlice({
    name: "user",
    initialState: [],
    reducers:{
        addUser(state, action){
            state.push(action.payload);
        },
        removeUser(state, action){

        },
        deleteUsers(state, action){

        },
    }
});


export default  usersSlice.reducer;
export const { addUser, removeUser, deleteUsers } = usersSlice.actions;
