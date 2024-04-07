// useState is hook that provides access to the componet's STATE
// useEffect is a hook that provides access to the component's LIFECYCLE METHODS (e.g componentDidMount, componentDidUpdate, componentWillUnmount))
import React, { useState, useEffect } from 'react';

const ClockFC = (props) => {
    const [date, setDate] = useState(props.date);

    // 'useEffect' with an empty dependency array will only run once after initial mounting
    // This is equivalent to 'componentDidMount' in a class component
    useEffect(() => {
        const timerID = setInterval(() => {
            let b = new Date();
            b.setHours(b.getHours() + 8);
            setDate(b);
        }, 1000);

        // This is the 'unmounting' event, equiavalent to 'componentWillUnmount' in a class component
        return () => {
            clearInterval(timerID);
        }
    }, []);

    return (
        <div>
            { date.toString() }
        </div>
    )
}

export default ClockFC;
