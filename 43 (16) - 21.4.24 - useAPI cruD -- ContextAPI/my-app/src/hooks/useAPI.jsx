import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Scenarios:
// 1 - isOnMount = true - useEffect([]) -> apiCall();
// 2 - isOnMount = false - useEffect([isCallAPI])
//   --> return [..., callAPI -> setIsCallAPI(true)]
//   --> useEffect([isCallAPI]) -> apiCall(); 
//
const useAPI = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();

    const [url, setUrl] = useState();
    const [method, setMethod] = useState();
    const [payload, setPayload] = useState();

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
                    response = await axios.post(url, payload);
                    break;
                case METHOD.UPDATE:
                    response = await axios.put(`${url}/${payload.id}`, payload);
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
            setIsCallAPI(false);
        }
    }
    
    useEffect(() => {
        if (isCallAPI) {
            apiCall();
        }
    }, [isCallAPI]);

    const callAPI = (url, method = METHOD.GET_ALL, inputPayload) => {
        setUrl(url);
        setMethod(method);
        setPayload(inputPayload);
        setIsCallAPI(true);
    }

    return [data, error, isLoading, callAPI, method];
}

export const METHOD = {
    GET_ALL: 'GET_ALL',
    GET_ONE: 'GET_ONE',
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE'
};

export default useAPI;