import React from 'react';
import useClock from '../../../hooks/useClock';

const ClockUsingHook = () => {
    const [time] = useClock();

    return (
        <div>
            { time.toString() }
        </div>
    )
}

export default ClockUsingHook
