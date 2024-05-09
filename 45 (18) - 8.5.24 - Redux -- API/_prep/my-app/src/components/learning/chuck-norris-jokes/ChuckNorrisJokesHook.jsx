import React, { useState, useEffect } from 'react';
import useChuckNorrisJokes from '../../../hooks/useChuckNorrisJokes';

const ChuckNorrisJokes = () => {
    const [joke, setUpdateJoke, isLoading, error] = useChuckNorrisJokes();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: { error }</div>

    return (
        <div>
            <div style={{fontSize: '1.5em'}}> { joke }</div>
            <div>
                <button onClick={() => setUpdateJoke(true)}>Get New Joke</button>
            </div>
        </div>
    )
}

export default ChuckNorrisJokes;
