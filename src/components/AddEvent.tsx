import { useParams, useNavigate } from "react-router-dom";
import { useHttp } from "../custom-hooks/useHttp";
import { MyEvent } from "../types/Event";
import { useContext } from "react";
import { EventsContext } from "../context/Events.context";
import "./AddEvent.css";

export const AddEvent = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const { request: requestPostEvent } = useHttp<MyEvent>('event', 'post');

  const { refresh } = useContext(EventsContext); // הוספה של refresh מהקונטקסט

  const insertEvent = async (event: any) => {
    event.preventDefault();
    const newEvent: MyEvent = {
      id: Math.random().toString(36).substring(2, 9),
      name: event.target.name.value,
      description: event.target.description.value,
      producerEmail: email as string,
    };

    try {
      await requestPostEvent(undefined,newEvent);
      if (refresh) await refresh(); // רענון הנתונים
      navigate(`/producers/ProducerDetails/${email}`); // חזרה לעמוד הרשימה
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <form onSubmit={insertEvent} className="add-event-form">
      <h2>הוספת אירוע</h2>
      <label htmlFor="name">שם אירוע </label>
      <input type="text" name="name" required />
      <br />
      <label htmlFor="description">תיאור </label>
      <input type="text" name="description" required />
      <br />
      <button type="submit">הוסף אירוע</button>
    </form>
  );
};
