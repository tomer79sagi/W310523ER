import { createSlice } from '@reduxjs/toolkit';

export const TodosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: Math.floor(Math.random() * 1000),
                text: action.payload
            }

            // This is unique and unusual syntax for an asynchronous mechanism with 'state' objects
            // It should be immutable and therefore we should COPY the state and update the new copy
            // But 'Slice' uses the library 'immer' which converts mutable code to immutable code automagically
            state.push(todo);
        },
        updateTodo: (state, action) => {
            // 'action.payload' must reference the todo object to update and include the 'text' to update
            return state.map(td => td.id === action.payload.id ? action.payload : td);
        },
        removeTodo: (state, action) => state.filter(td => td.id !== action.payload.id)
    }
});

export const { addTodo, updateTodo, removeTodo } = TodosSlice.actions;

export default TodosSlice.reducer;