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
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Trivium Parking Management</Navbar.Brand>
      </Container>
      </Navbar>
    <Form className="centerForm">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Employee Code</Form.Label>
        <Form.Control type="email" placeholder="Enter emp code" value={empID} onChange={(e) => setEmpID(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        Submit
      </Button>
    </Form>
    </>
  );
}

export default Login;