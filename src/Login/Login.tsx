import { useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [empID, setEmpID] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const handleLogin = () => {
    if (!empID || !password) {
      setAlert("Please enter a EmpID and password.");
      return;
    }

    if (empID === "E007" && password === "123456") {
      localStorage.setItem("empID", empID);
      localStorage.setItem("Isauth", "true");
      navigate("/dashboard/");
    } else {
      setAlert("Login failed. Please try again.");
    }
  };


  return (
    <>
    <Navbar>
    <Container>
      <Navbar.Brand href="#home" className='navBarText'>Trivium Parking Management</Navbar.Brand>
      </Container>
      </Navbar>
    <Form className="centerForm">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='labelText'>Employee Code</Form.Label>
        <Form.Control placeholder="Enter emp code" className='labelText' value={empID} onChange={(e) => setEmpID(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='labelText'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className='labelText' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        Submit
      </Button>
    </Form>
    <img src='parking' alt="react logo" />
    </>
  );
}

export default Login;