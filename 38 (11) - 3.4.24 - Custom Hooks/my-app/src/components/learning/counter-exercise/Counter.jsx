import React, { useState } from 'react'
import CounterBox from './CounterBox';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [randomNumber, setRandomNumber] = useState(Math.random() * 100 + 1);

    // This function is responsible for
    // receiving a message/event from a child component and updating the 'local'
    // randomNumber with the newly generated number from the child component
    const handleGeneratedRandomNumber = (ranNumber) => {
        setRandomNumber(ranNumber);
    }

    return (
        <div>
            <div>
                Counter: {counter}<br/>
                Random: {randomNumber}
            </div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>Increment +</button>
                &nbsp;
                <button onClick={() => setCounter(counter - 1)}>Decrement -</button>
                &nbsp;
                <button onClick={() => setCounter(0)}>Reset</button>
                &nbsp;
                <button onClick={() => setRandomNumber(Math.random() * 100 + 1)}>Generate Random</button>
            </div>
            <div>
                <CounterBox num={randomNumber} callback={handleGeneratedRandomNumber}/>
            </div>
        </div>
    )
}

export default Counter
