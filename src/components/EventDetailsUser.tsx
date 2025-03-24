
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EventsContext } from "../context/Events.context";

export const EventDetailsUser = () => {
    const { id } = useParams(); // 🔍 קבלת ה-ID מה-URL
    const { events } = useContext(EventsContext);
    console.log("in EventDetailsUser", events);
    
    const event = events?.find(e => e.id === id); // חיפוש האירוע לפי ID

    if (!event) return <h2>אירוע לא נמצא</h2>;

    return (
        <div>
            <h1>{event.name}</h1>
            <p>{event.description} </p>
            <p>{event.producerEmail} <strong>אימייל המפיק:</strong> </p>
        </div>
    );
};
