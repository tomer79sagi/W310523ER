import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './TodosSlice';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();

        // Dispatch the new value and function to the Redux Store
        dispatch(addTodo(text));
        setText('');
    }

    return (
        <div>
            <form onSubmit={addTodoHandler}>
                <input type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
