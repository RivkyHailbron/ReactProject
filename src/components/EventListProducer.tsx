import { NavLink, useParams } from "react-router-dom";
import { useHttp } from "../custom-hooks/useHttp";
import { MyEvent } from "../types/Event";
import { useContext, useEffect, useState } from "react";
import { EventsContext } from "../context/Events.context";

export const EventListProducer = () => {
    const { email } = useParams();
    const { events, refresh } = useContext(EventsContext);
    const [addEventState, setAddEventState] = useState(false);
    const [eventsState, setEventsState] = useState<MyEvent[]>(events as MyEvent[]);// עדכון רשימת האירועים המקומית
    const { error: postEventError, request: requestPostEvent } = useHttp<MyEvent>('event', 'post');
    const { error: deleteEventError, request: requestDeleteEvent } = useHttp<MyEvent>('event', 'delete');

    useEffect(() => {
        if(refresh)
        refresh();
       

    }, [])

    const deleteFunc = async (eventId: string) => {
        try {
            await requestDeleteEvent(`/events/${eventId}`); // העבר את ה-URL הדינמי כאן
            // await refresh(); // רענן את רשימת האירועים
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };
    const insertEvent = async (event: any) => {
        event.preventDefault();
        const newEvent: MyEvent = {
            id: Math.random().toString(36).substring(2, 9),
            name: event.target.name.value,
            description: event.target.description.value,
            producerEmail: email as string,
        }
        try {
            await requestPostEvent(newEvent);
            setAddEventState(false);
            events?.push(newEvent); // הוסף את האירוע החדש לרשימה הגלובלית
            setEventsState(events as MyEvent[]);// עדכן את הרשימה המקומית
        } catch (error) {
            console.error("Error adding event:", error);
        }
    }

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
                            <button onClick={() => deleteFunc(event.id)}>Delete</button>
                            {deleteEventError && <p className="error-text">{deleteEventError}</p>}

                        </li>
                    )
                }
            </ul>
            {<button onClick={() => setAddEventState(true)} disabled={addEventState}>הוספת אירוע</button>}

            {addEventState &&
                <form onSubmit={insertEvent}>
                    <label htmlFor="name">שם אירוע </label>
                    <input type="text" name="name" />
                    <br />
                    <label htmlFor="description">תיאור </label>
                    <input type="text" name="description" />
                    <br />
                    <button type="submit"> הוספת אירוע</button>

                </form>}
        </div>
    );

}