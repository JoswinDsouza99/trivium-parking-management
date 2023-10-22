import './App.css';
import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Register';
import Dashboard from './Dashboard/Dashboard';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path='Dashboard' element={<Dashboard/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
