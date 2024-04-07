import React from 'react'

const EventHandlingFC = () => {

    const handleClick = (newName) => {
        alert(newName);
    }

    return (
        <div>
            <button onClick={() => handleClick('John Smith')}>Click Me (FC)</button>
        </div>
    )
}

export default EventHandlingFC;
