import { Container, Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
    return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Trivium Parking Management</Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#booking">Booking</Nav.Link>
      <Nav.Link href="#reservations">Reservations</Nav.Link>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">{localStorage.getItem("empID")}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;