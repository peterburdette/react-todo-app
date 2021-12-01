import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

// slice for the authentication component
const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            // 'state' is the current state
            state.isAuthenticated = true;
            console.log(action.payload.username + ' logged in');
        },
        logout(state) {
            // 'state' is the current state
            state.isAuthenticated = false;
            console.log('user logged out');
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;