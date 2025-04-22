import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import { EventsContext } from "../context/Events.context";
import "./EventListUser.css";
export const EventListUser = () => {
    const { events, refresh } = useContext(EventsContext);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (refresh) refresh(); // קריאה ל- API בעת טעינת הקומפוננטה
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredEvents = events?.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return <div className="user-event-list">
        <h1>Event List</h1>
        <input
            type="text"
            placeholder="חפש אירוע לפי שם"
            value={searchTerm}
            onChange={handleSearch}
        />
        <ul>
            {filteredEvents?.map(e => (
                <li key={e.id}>
                    <NavLink to={`/user/${e.id}`}>{e.name}</NavLink>
                </li>
            ))}
        </ul>
    </div>
}