import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './pages/login';
import Tasks from './pages/tasks';
import Project from './pages/project';
import Client from './pages/clients';
import Dashboard from './pages/dashboard';
import Calender from './pages/calender';
import Settings from './pages/settings';
import Team from './pages/team';
import Register from './pages/register';

import Admin from './pages/Admin/adminlayout';
import Admindashboard from './pages/Admin/Adashboard';
import Adminsettings from './pages/Admin/Asettings';
import Details from './pages/Admin/AuserDetails';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/project" element={<Project />} />
                <Route path="/client" element={<Client />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/Team" element={<Team />} />
                <Route path="/register" element={<Register />} />

                <Route path="/admin" element={<Admin />}>
                    <Route path="admindashboard" element={<Admindashboard />} />
                    <Route path="adminsettings" element={<Adminsettings />} />
                    <Route path="userdetails" element={<Details />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;