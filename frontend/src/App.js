import logo from './logo.svg';
import './App.css';
import LoginSignUp from './components/LoginSignUp'


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
