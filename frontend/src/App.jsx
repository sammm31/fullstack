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
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/client" element={<Client/>}/>
      <Route path= "/dashboard" element={<Dashboard/>}/>
      <Route path= "/calender" element={<Calender/>}/>
      <Route path= "/settings" element={<Settings/>}/>
      <Route path="/Team" element={<Team/>}/>
      <Route path="/register" element={<Register/>}/>
      
    </Routes>
    </BrowserRouter>
    
  );
}
export default App;
