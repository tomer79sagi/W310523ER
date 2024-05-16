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

    // 1. Define async API function
    const apiCall = async (url, method = METHOD.GET_ALL, payload) => {
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
                    response = await axios.delete(`${url}/${payload.id}`);
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

    return [data, error, isLoading, apiCall];
}

export const METHOD = {
    GET_ALL: 'GET_ALL',
    GET_ONE: 'GET_ONE',
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE'
};

export default useAPI;