import React from 'react';
import { useSelector } from 'react-redux';

const Todos = () => {
    // I want to access the 'state' of the 'todos' reducer,
    // that is defined in the 'configureStore' object in the 'store.js' file
    // and set a local variable called 'todosState' that will point to the 'state' of the 'todos' reducer
    const todosState = useSelector(store => store.todos);

    return (
        <div>
            { todosState.map(todo => (
                <div key={todo.id}>{todo.text}</div>
            ))}
        </div>
    )
}

export default Todos
