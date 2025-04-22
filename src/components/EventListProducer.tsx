import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useHttp } from "../custom-hooks/useHttp";
import { MyEvent } from "../types/Event";
import { useContext, useEffect, useState } from "react";
import { EventsContext } from "../context/Events.context";
import "./EventListProducer.css";

export const EventListProducer = () => {
    const { email } = useParams();
    const { events, refresh } = useContext(EventsContext);
    const navigate = useNavigate();
    const [eventsState, setEventsState] = useState<MyEvent[]>(events as MyEvent[]);// עדכון רשימת האירועים המקומית
    const { request: requestDeleteEvent } = useHttp<MyEvent>('', 'delete');

    useEffect(() => {
        if(refresh)
        refresh();
    }, [])

    const deleteEvent = async (id: string) => {
        try {
            await requestDeleteEvent(`/event/${id}`); 
            await refresh!(); // רענון הנתונים
            setEventsState(prev => prev.filter(event => event.id !== id));
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };
    
    return (
        <div className="producer-event-list">
            <h1>רשימת האירועים שלך</h1>
            <ul>
                {eventsState
                    .filter(event => event.producerEmail === email)
                    .map(event =>
                        <li key={event.id}>
                            <NavLink to={`/producers/EventDetailsProducer/${event.id}`}>
                                {event.name}
                            </NavLink>
                            <button onClick={() => deleteEvent(event.id)}>🗑 מחיקה</button>
                        </li>
                    )
                }
            </ul>
            <button onClick={() => navigate(`/producers/${email}/addEvent`)}>הוספת אירוע</button>
        </div>
    );

}