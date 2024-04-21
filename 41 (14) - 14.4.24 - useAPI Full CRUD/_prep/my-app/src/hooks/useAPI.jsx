import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Scenarios:
// 1 - isOnMount = true - useEffect([]) -> apiCall();
// 2 - isOnMount = false - useEffect([isCallAPI])
//   --> return [..., callAPI -> setIsCallAPI(true)]
//   --> useEffect([isCallAPI]) -> apiCall(); 
//
const useAPI = (url, method = METHOD.GET_ALL, propsPayload = null, isOnMount = true) => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    const [payload, setPayload] = useState(propsPayload);
    const [isCallAPI, setIsCallAPI] = useState(false); // Control when exactly to perform the API call

    // 1. Define async API function
    const apiCall = async () => {
        try {
            setIsLoading(true);
            let response;

            switch (method) {
                case METHOD.GET_ALL:
                    response = await axios.get(url);
                    break;
                case METHOD.GET_ONE:
                    response = await axios.get(`${url}/${payload.id}`);
                    break;
                case METHOD.CREATE:
                    response = await axios.post();
                    break;
                case METHOD.UPDATE:
                    break;
                case METHOD.DELETE:
                    break;
                default:
                    break;
            }
        
            setData(response.data);    
        } catch(err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (isOnMount) {
            // 2. Call the async function
            apiCall();
        }
    }, []);
    
    useEffect(() => {
        if (!isOnMount) {
            apiCall();
        }
    }, [isCallAPI]);

    const callAPI = (inputPayload) => {
        setPayload(inputPayload);
        setIsCallAPI(true);
    }

    return [data, error, isLoading, callAPI];
}

export const METHOD = {
    GET_ALL: 'GET_ALL',
    GET_ONE: 'GET_ONE',
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE'
};

export default useAPI;