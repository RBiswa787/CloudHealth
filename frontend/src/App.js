import logo from './logo.svg';
import './App.css';
import LoginSignUp from './Pages/LoginSignUp'
import { Routes, Route } from "react-router-dom"
import PatientEditProfile from './Pages/PatientEditProfile';
import DoctorEditProfile from './Pages/DoctorEditprofile';
import PatientAppointDoctor from './Pages/PatientAppointDoctor';
import DocProfile from './Pages/DocProfile';
import EHR from './Pages/EHR';
function App() {
  return (
    <Routes>
          <Route path={"/"} element={<LoginSignUp></LoginSignUp>} />
          <Route path={"/patientEditProfile"} element={<PatientEditProfile></PatientEditProfile>}/>
          <Route path={"/doctorEditProfile"} element={<DoctorEditProfile></DoctorEditProfile>}/>
          <Route path={"/patientAppointDoctor"} element={<PatientAppointDoctor></PatientAppointDoctor>}/>
          <Route path={"/docProfile"} element={<DocProfile></DocProfile>}/>
          <Route path={"/EHR"} element={<EHR></EHR>}/>
      </Routes>
  );
}

export default App;
