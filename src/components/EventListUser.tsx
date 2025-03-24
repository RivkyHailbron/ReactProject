import { useContext, useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom";
import { EventsContext } from "../context/Events.context";

export const EventListUser = () => {
    const { events, refresh } = useContext(EventsContext);
    useEffect(() => {
        if (refresh) refresh(); // קריאה ל- API בעת טעינת הקומפוננטה
    }, [])
    console.log(`after usecontext ${events}`);

    return <div>
        <h1>Event List</h1>
        {events?.map(e => <li key={e.id}> <NavLink to={`/user/${e.id}`}> {e.name} </NavLink> </li>)}

    </div>
}