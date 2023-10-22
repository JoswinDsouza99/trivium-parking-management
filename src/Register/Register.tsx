import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Register = () => {
  return (
    <Form className="centerForm">
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmpID">
        <Form.Label>Emp ID</Form.Label>
        <Form.Control placeholder="Enter your EmpID" />
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={4}>
            Vehicle Type
          </Form.Label>
          <Col sm={8}>
            <Form.Check
              type="radio"
              label="2 Wheeler"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="4 Wheeler"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Bicycle"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group className="mb-3" controlId="formGroupVNo">
        <Form.Label>Vehicle No.</Form.Label>
        <Form.Control placeholder="Enter your Vehicle No" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}

export default Register;