import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodo: (state, action) => {
            state.todos = action.payload
        },
        resetTodo: (state, action) => {
            state.todos = []
        }
    }
})

export const {setTodo,resetTodo} = todoSlice.actions

export default todoSlice.reducer;
