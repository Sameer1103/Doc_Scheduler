import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Apppointment from './Components/Appointment';

function App() {
  return (
    <div style={{backgroundColor: '#6c757d'}}>
      <NavBar />
      <div style={{marginLeft: '20%', marginRight: '20%', paddingTop: '10%', backgroundColor: 'white', borderRadius: '2%'}}>
        <Apppointment />
      </div>
    </div>
  );
}


export default App;
