import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from './TodosSlice';

const EditTodo = ( { selectedTodo }) => {
    const [text, setText] = useState(selectedTodo.text);
    const dispatch = useDispatch();

    const updateTodoHandler = (e) => {
        e.preventDefault();

        // Dispatch the new value and function to the Redux Store
        dispatch(updateTodo({
            id: selectedTodo.id,
            text: text
        }));
    }

    return (
        <div>
            <form onSubmit={updateTodoHandler}>
                <div style={{display: 'inline-block', width: '200px'}}>
                <input type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                </div>
                <div style={{display: 'inline-block', width: '200px'}}>
                    <button>Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditTodo;
