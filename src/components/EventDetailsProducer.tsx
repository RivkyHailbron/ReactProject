import { useParams } from "react-router-dom";
import { MyEvent } from "../types/Event";
import { useContext, useState } from "react";
import { EventsContext } from "../context/Events.context";
import { useHttp } from "../custom-hooks/useHttp";
import "./EventDetailsProducer.css";

export const EventDetailsProducer = () => {
    const { events , refresh} = useContext(EventsContext);
    const { id } = useParams();
    const [updateEvent, setUpdateEvent] = useState(false);

    const event: MyEvent | undefined = events?.find((event: MyEvent) => event.id === id);
    const { error: putEventError, request: putEventRequest } = useHttp<MyEvent>(`event/${id}`, 'put');


    const submitEvent = async (event: any) => {
        event.preventDefault();
        const updateEvent: MyEvent = {
            id: event.target.id.value,
            name: event.target.name.value,
            description: event.target.description.value,
            producerEmail: event.target.producerEmail.value,
        }
        try {
            await putEventRequest(undefined,updateEvent)
            refresh?.();
            setUpdateEvent(false);
            event.target.reset();
        } catch (error) {
            console.log("error", error);
        }
    }
    
    return (
        <div className="event-details">
            <h1>פרטי אירוע  </h1>
            {event ? (
                <div>
                    <h1>{event.name}</h1>
                    <p>{event.description}</p>
                    <p>Producer Email: {event.producerEmail}</p>
                    {/* update */}
                    {!updateEvent && <button onClick={() => setUpdateEvent(true)}>Update</button>}
                    {updateEvent &&
                        <form onSubmit={submitEvent}>
                            <label htmlFor="name">שם אירוע </label>
                            <input type="text" defaultValue={event.name} name="name" />
                            <br />
                            <label htmlFor="description">תיאור </label>
                            <input type="text" defaultValue={event.description} name="description" />
                            <br />
                            <label htmlFor="producerEmail">מייל מפיק </label>
                            <input type="text" defaultValue={event.producerEmail} name="producerEmail" />
                            <br />
                            <button type="submit">עדכון</button>
                        </form>}
                        {putEventError && <p className="error-text">{putEventError}</p>}
                </div>
            ) : (
                <p>Event not found</p>
            )}
        </div>
    );
}