import { useState, useEffect } from 'react';
import axios from 'axios';

const useChuckNorrisJokes = () => {
    const [joke, setJoke] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [updateJoke, setUpdateJoke] = useState(false); // Flag for making API call

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
        if (updateJoke) {
            fetchJoke();
            setUpdateJoke(false);
        }
    }, [updateJoke]);

    return [joke, setUpdateJoke, isLoading, error];
}

export default useChuckNorrisJokes
