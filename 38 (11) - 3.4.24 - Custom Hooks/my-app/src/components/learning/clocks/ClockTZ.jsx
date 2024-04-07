import React, { useState, useEffect } from 'react'

// Option 1 - Desctructing and default values
const ClockTZ = ( {name, timeZone = 'Asia/Jerusalem'} ) => {
    
    // Function 'useState' returns an Array with 2 elements --> (1) data state, (2) setter for the data states
    // ARRAY destruction --> ARRAY must exist for this to work
    const [date, setDate] = useState(new Date());
    // const arrState = useState(props.date);
    // arrState[0] // name
    // arrState[1] // setName


    // 'useEffect' with an empty dependency array will only run once after initial mounting
    // This is equivalent to 'componentDidMount' in a class component
    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // This is the 'unmounting' event, equiavalent to 'componentWillUnmount' in a class component
        return () => {
            clearInterval(timerID);
        }
    }, []);

    // Option 2 - Default values for properties
    // propsTimeZone = !propsTimeZone ? 'Asia/Jerusalem' : propsTimeZone;
    // timeZone = timeZone || 'Asia/Jerusalem';

    return (
        <div>
            <div>{name}: {date.toLocaleString("en-US", { timeZone: timeZone })}</div>
        </div>
    )
}

export default ClockTZ;
