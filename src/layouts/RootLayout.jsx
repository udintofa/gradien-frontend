import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

export default function RootLayout() {
    return (
        <div className="rootlayout" style={{marginTop: 20}}>
                <NavLink style={{marginRight: 10}} className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>|
                <NavLink style={{margin: "0 10px"}} className={({ isActive }) => isActive ? "active" : ""} to="/login">Masuk</NavLink>
            <Outlet />
        </div>
    )}