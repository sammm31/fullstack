import { Link, Outlet } from "react-router-dom";

function Admin() {
    return (
        <div>
            <h1>ADMIN</h1>

            <nav>
                <Link to="/admin/admindashboard">Dashboard</Link>
                <Link to="/admin/adminsettings">Settings</Link>
                <Link to="/admin/userdetails">User Details</Link>
            </nav>

            <Outlet />
        </div>
    );
}

export default Admin;