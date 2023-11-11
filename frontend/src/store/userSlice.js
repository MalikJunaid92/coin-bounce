import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    email: '',
    username: '',
    auth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,  // Fix the typo here
    reducers: {
        setUser: (state, action) => {
            const { id, email, username, auth } = action.payload;
            state.id = id;
            state.email = email;
            state.username = username;
            state.auth = auth;
        },
        resetUser: (state, action) => {
            state.id = '';
            state.email = '';
            state.username = '';
            state.auth = false;
        }
    }
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;