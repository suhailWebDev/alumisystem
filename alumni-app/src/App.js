import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Events from './Components/Events';
import Login from './Components/Login';
import NewAlumni from './Components/NewAlumni';
import NewStaff from './Components/NewStaff';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ErrorPage from './Components/ErrorPage';
import MyProfile from './Components/MyProfile';
import AdminLogin from './Components/AdminLogin';
import AdminPage from './Components/Admin/AdminPage';
import Logout from './Components/Logout';
import NewAdmin from './Components/Admin/NewAdmin';
import NewEvents from './Components/Admin/NewEvents';
import StaffList from './Components/Admin/StaffList';
import AlumniList from './Components/Admin/AlumniList';
import EventList from './Components/Admin/EventList';
import AdminList from './Components/Admin/AdminList';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/newalumni' element={<NewAlumni/>}/>
      <Route path='/newstaff' element={<NewStaff/>}/>  
      <Route path='/login' element={<Login/>}/> 
      <Route path='/logout' element={<Logout/>}/> 
      <Route path='/adminlogin' element={<AdminLogin/>}/> 
      <Route path='/myprofile' element={<MyProfile/>}/> 
      <Route path='/adminpage' element={<AdminPage/>}/>
      <Route path='/newadmin' element={<NewAdmin/>}/> 
      <Route path='/newevents' element={<NewEvents/>}/> 
      <Route path='/stafflist' element={<StaffList/>}/> 
      <Route path='/alumnilist' element={<AlumniList/>}/> 
      <Route path='/eventlist' element={<EventList/>}/> 
      <Route path='/adminlist' element={<AdminList/>}/> 
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
