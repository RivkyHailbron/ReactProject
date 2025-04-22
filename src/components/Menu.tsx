import { NavLink } from "react-router-dom"
import "./Menu.css"

export const Menu=()=>{
    return <div className="menu-container">
        <NavLink to="/producer">כניסת מפיק/ה</NavLink><br />
        <NavLink to="/user">כניסת משתמש</NavLink>
    </div>
}