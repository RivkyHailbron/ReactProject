import { useContext } from "react"
import { NavLink, Outlet } from "react-router-dom";
import { EventsContext } from "../context/Events.context";

export const EventListUser = () => {
    const {events} = useContext(EventsContext);
    return <div>
        <h1>Event List</h1>
        {events?.map(e=><li key={e.id}> <NavLink to={e.id}> {e.description} </NavLink> </li>)}
   
    </div>
}