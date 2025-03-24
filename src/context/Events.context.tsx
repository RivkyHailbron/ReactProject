import { createContext, useState } from "react";
import { EventContextType, MyEvent } from "../types/Event";
import { useHttp } from "../custom-hooks/useHttp";

export const EventsContext = createContext<Partial<EventContextType>>({});


export const EventsProvider = (props: any) => {

    const { isLoading, error, data, request } = useHttp<MyEvent[]>('/event', 'get');
    console.log("after useHttp", data);


    // const [eventsArr, setEventsArr] = useState<MyEvent[]>(data || []); // הגדרת משתנה סטייט לאירועים
    // פונקציה לרענון הנתונים
    const refresh = async () => {
        const response = await request(); // קריאה ל-API
        // if (response != null) {
        //     setEventsArr(response); // עדכון ה-state עם התשובה שהתקבלה
        // }
    };
    const contextValue: EventContextType = {
        events: data!,
        refresh: refresh
    };

    return <EventsContext.Provider value={contextValue}>
        {isLoading && 'Loading...'}
        {error && error}
        {!error && props.children}
    </EventsContext.Provider>
}