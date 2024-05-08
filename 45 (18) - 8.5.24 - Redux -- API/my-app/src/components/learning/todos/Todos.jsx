import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from './TodosSlice';

const Todos = () => {
    // I want to access the 'state' of the 'todos' reducer,
    // that is defined in the 'configureStore' object in the 'store.js' file
    // and set a local variable called 'todosState' that will point to the 'state' of the 'todos' reducer
    const todosState = useSelector(store => store.todos);
    const dispatch = useDispatch();

    const handleDelete = (td) => {
        dispatch(removeTodo(td));
    }

    return (
        <div>
            { todosState.map(todo => (
                <div key={todo.id}>
                    {todo.text}
                    <button onClick={() => handleDelete(todo)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Todos
