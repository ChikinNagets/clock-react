import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 15,
    view: "clock"
}

export const timerSlice = createSlice({ 
    name: 'timerValues',
    initialState,
    reducers: {
        updateInputValue: (state, action) => {
            state.value = action.payload
        },
        updateView: (state, action) => {
            state.view = action.payload
        }
    }
})

export const { updateInputValue, updateView } = timerSlice.actions
export default timerSlice.reducer