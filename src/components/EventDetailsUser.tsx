import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EventsContext } from "../context/Events.context";
import "./EventDetailsUser.css";

export const EventDetailsUser = () => {
    // קבלת ה-ID מה-URL
    const { id } = useParams();
    const { events } = useContext(EventsContext);
    console.log("in EventDetailsUser", events);

    // חיפוש האירוע לפי ID
    const event = events?.find(e => e.id === id);

    // אם האירוע לא נמצא, מחזירים הודעת שגיאה
    if (!event) return <h2>אירוע לא נמצא</h2>;

    return (
        <div className="event-details-user">
            <h1>{event.name}</h1>
            <p>{event.description}</p>
            <p>
                <strong>אימייל המפיק:</strong> {event.producerEmail}
            </p>
        </div>
    );
};
