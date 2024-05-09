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

            state.push(todo);
        }
    }
});

export const { addTodo } = TodosSlice.actions;

export default TodosSlice.reducer;