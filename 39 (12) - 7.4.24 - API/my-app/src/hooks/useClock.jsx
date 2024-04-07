import { useState, useEffect } from 'react';

const useClock = () => {
    const [time, setTime] = useState(new Date());

    // 'useEffect' with an empty dependency array will only run once after initial mounting
    // This is equivalent to 'componentDidMount' in a class component
    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // This is the 'unmounting' event, equiavalent to 'componentWillUnmount' in a class component
        return () => {
            clearInterval(timerID);
        }
    }, []);

    return [time];
}

export default useClock;
