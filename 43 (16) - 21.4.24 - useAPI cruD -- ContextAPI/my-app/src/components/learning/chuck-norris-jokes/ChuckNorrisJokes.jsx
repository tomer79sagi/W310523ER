import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChuckNorrisJokes = () => {
    const [joke, setJoke] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [newJoke, setNewJoke] = useState(false); // Flag for making API call

    // 1. Define async API function
    const fetchJoke = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('https://api.chucknorris.io/jokes/random');
            setJoke(response.data.value);
        } catch(err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    // ON MOUNTING - side effect
    useEffect(() => {
        // 2. Call the async function
        fetchJoke();
    }, []);

    // ON SPECIFIC EVENT - side effect
    useEffect(() => {
        if (newJoke) {
            fetchJoke();
            setNewJoke(false);
        }
    }, [newJoke]);

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: { error }</div>

    return (
        <div>
            <div style={{fontSize: '1.5em'}}> { joke }</div>
            <div>
                <button onClick={() => setNewJoke(true)}>Get New Joke</button>
            </div>
        </div>
    )
}

export default ChuckNorrisJokes;
