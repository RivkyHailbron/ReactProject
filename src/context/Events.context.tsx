import { createContext, useState, useEffect } from "react";
import { EventContextType, MyEvent } from "../types/Event";
import { useHttp } from "../custom-hooks/useHttp";

export const EventsContext = createContext<Partial<EventContextType>>({});

export const EventsProvider = (props: any) => {
    const { isLoading, error, data, request } = useHttp<MyEvent[]>('/event', 'get');
    const [eventsArr, setEventsArr] = useState<MyEvent[]>([]);

    // אם data משתנה, נעדכן את eventsArr
    useEffect(() => {
        if (data) {
            setEventsArr(data); // עדכון ה-state עם הנתונים החדשים
        }
    }, [data]); // הפונקציה תתרחש רק אם data משתנה

    const refresh = async () => {
        const response = await request(); 
        if (response != null) {
            setEventsArr(response); // עדכון ה-state עם התשובה שהתקבלה
        }
    };

    const contextValue: EventContextType = {
        events: eventsArr,
        refresh: refresh
    };

    return <EventsContext.Provider value={contextValue}>
        {isLoading && 'Loading...'}
        {error && error}
        {!error && props.children}
    </EventsContext.Provider>
}
