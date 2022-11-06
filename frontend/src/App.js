import logo from './logo.svg';
import './App.css';
import LoginSignUp from './Pages/LoginSignUp'
import PatientProfileCreation from './Pages/PatientProfileCreation'
import DoctorProfileCreation from './Pages/DoctorProfileCreation'
import Dashboard from './Pages/Dashboard'
import DoctorDashboard from './Pages/DoctorDashboard'
import JSON from './Pages/JSON'
import { Routes, Route } from "react-router-dom"
import RegForm from './components/RegForm';
import PatientEditProfile from './Pages/PatientEditProfile';
import DoctorEditProfile from './Pages/DoctorEditprofile';
import PatientAppointDoctor from './Pages/PatientAppointDoctor';
import DocProfile from './Pages/DocProfile';
import EHR from './Pages/EHR';
function App() {
  return (
    <Routes>
          <Route path={"/"} element={<LoginSignUp></LoginSignUp>} />
          <Route path={"/doctorNewProfile"} element={<DoctorProfileCreation></DoctorProfileCreation>} />
          <Route path={"/patientNewProfile"} element={<PatientProfileCreation></PatientProfileCreation>} />
          <Route path={"/dashboard"} element={<Dashboard></Dashboard>}/>
          <Route path={"/doctorDashboard"} element={<DoctorDashboard></DoctorDashboard>}/>
          <Route path={"/json"} element={<JSON></JSON>}/>
          <Route path={"/patientEditProfile"} element={<PatientEditProfile></PatientEditProfile>}/>
          <Route path={"/doctorEditProfile"} element={<DoctorEditProfile></DoctorEditProfile>}/>
          <Route path={"/patientAppointDoctor"} element={<PatientAppointDoctor></PatientAppointDoctor>}/>
          <Route path={"/docProfile"} element={<DocProfile></DocProfile>}/>
          <Route path={"/EHR"} element={<EHR></EHR>}/>
      </Routes>
  );
}

export default App;
