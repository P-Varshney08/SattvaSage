import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    doshaScore: null,
}

const doshaSlice = createSlice({
    name: 'dosha',
    initialState,
    reducers: {
        setDoshaScore(state, action) {
            state.doshaScore = action.payload;
        }
    }
})

export const {setDoshaScore} = doshaSlice.actions;
export default doshaSlice.reducer;