import { NavLink } from "react-router-dom"


export const Menu=()=>{
    return <div>
        <NavLink to="/producer">כניסת מפיק/ה</NavLink><br />
        <NavLink to="/user">כניסת משתמש</NavLink><br /><br />
    </div>
}