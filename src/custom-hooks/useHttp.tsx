import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const EventsInstance = axios.create({
    baseURL: 'http://localhost:3000',
});

type HttpMethod = 'get' | 'post' | 'put' | 'delete';

export function useHttp<T>(url: string, method: HttpMethod) {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setIsError] = useState('');
    const [data, setData] = useState<T>();

    const request = useCallback(async (dynamicUrl: string = url, ...params: any[]) => {
        setIsLoading(true);
        setIsError('');
        try {
            const result = await EventsInstance[method]<T>(dynamicUrl, ...params);
            setData(result.data);
        } catch (error) {
            setIsLoading(false);
            setIsError('error while fetching data');
        }
        finally {
            setIsLoading(false); // זה יבטיח שהמצב מתעדכן גם במקרה של שגיאה
        }
    }, []);

    useEffect(() => {
        if (method === 'get') {
            request();
        }
    }, [method, url]);

    return { isLoading, error, data, request }
}
