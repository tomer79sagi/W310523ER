import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from './TodosSlice';
import EditTodo from './EditTodo';

const Todos = () => {
    // I want to access the 'state' of the 'todos' reducer,
    // that is defined in the 'configureStore' object in the 'store.js' file
    // and set a local variable called 'todosState' that will point to the 'state' of the 'todos' reducer
    const todosState = useSelector(store => store.todos);
    const dispatch = useDispatch();
    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleDelete = (td) => {
        dispatch(removeTodo(td));
    }

    const handleEdit = (td) => {
        setSelectedTodo(td);
    }

    useEffect(() => {
        setSelectedTodo(null);
    }, [todosState]);

    return (
        <div>
            { todosState.map(todo => (
                <div key={todo.id}>

                    { selectedTodo && todo.id === selectedTodo.id ? (
                        <EditTodo selectedTodo={selectedTodo}/>
                    ) : (
                        <div>
                            <div style={{display: 'inline-block', width: '200px'}}>{todo.text}</div>
                            <div style={{display: 'inline-block', width: '200px', verticalAlign: 'top' }}>
                                <button onClick={() => handleEdit(todo)}>Edit</button>
                                &nbsp;
                                <button onClick={() => handleDelete(todo)}>Delete</button>
                            </div>
                        </div>
                    )}
                    
                </div>
            ))}
        </div>
    )
}

export default Todos
