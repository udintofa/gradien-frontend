import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="rootlayout">
                {/* <NavLink style={{marginRight: 10}} className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>|
                <NavLink style={{margin: "0 10px"}} className={({ isActive }) => isActive ? "active" : ""} to="/login">Masuk</NavLink> */}
            <Outlet />
        </div>
    )}