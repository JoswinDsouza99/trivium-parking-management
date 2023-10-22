import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
    <Form className="centerForm">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Employee Code</Form.Label>
        <Form.Control type="email" placeholder="Enter emp code" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;