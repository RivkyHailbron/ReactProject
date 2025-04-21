import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const EventsInstance = axios.create({
    baseURL: 'http://localhost:3000',
});

type HttpMethod = 'get' | 'post' | 'put' | 'delete';

export function useHttp<T>(url: string, method: HttpMethod){
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setIsError] = useState('');
    const [data, setData] = useState<T>();

    const request = useCallback(async (...params: any[]) => {
        setIsLoading(true);
        setIsError('');
        try {
            const result = await EventsInstance[method]<T>(url, ...params);
            setIsLoading(false);
            // data.forEach((e: any) => console.log(e));
            setData(result.data);
            
<<<<<<< HEAD
=======
            
>>>>>>> 406c578b17aba53b5dcd34211c6ab0ec617218a6
        } catch(error) {
            setIsLoading(false);
            setIsError('error while fetching data');
        }
    }, []);

    useEffect(() => {
        if (method === 'get') {
            request();
        }
    }, []);
    
    return { isLoading, error, data, request }
}
