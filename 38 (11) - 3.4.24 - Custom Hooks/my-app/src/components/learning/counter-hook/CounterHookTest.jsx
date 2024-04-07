import React from 'react';
import useCounter from '../../../hooks/useCounter';

const CounterHookTest = () => {
    
    const [count, increment, decrement] = useCounter();

    return (
        <div>
            { count }
            <br/>
            <button onClick={increment}>Increment +</button>
            <button onClick={decrement}>Decrement -</button>
        </div>
    )
}

export default CounterHookTest
