import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails(state, action) {          // here, setUserDetailsa is the name of reducer
            state.userDetails = action.payload;
        },
    },
});

export const {setUserDetails} = userSlice.actions;
export default userSlice.reducer;