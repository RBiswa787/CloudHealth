import logo from './logo.svg';
import './App.css';
import LoginSignUp from './Pages/LoginSignUp'
import PatientProfileCreation from './Pages/PatientProfileCreation'
import DoctorProfileCreation from './Pages/DoctorProfileCreation'
import Dashboard from './Pages/Dashboard'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<LoginSignUp></LoginSignUp>} />
          <Route path={"/doctorNewProfile"} element={<DoctorProfileCreation></DoctorProfileCreation>} />
          <Route path={"/patientNewProfile"} element={<PatientProfileCreation></PatientProfileCreation>} />
          <Route path={"/dashboard"} element={<Dashboard></Dashboard>} />
      </Routes>
  );
}

export default App;
