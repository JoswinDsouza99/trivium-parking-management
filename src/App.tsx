import './App.css';
import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Register';
import Dashboard from './Dashboard/Dashboard';
import Reservations from './Reservations/Reservations';


function App() {
  return (
    <div className='mainDiv'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path="reservation" element={<Reservations/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
