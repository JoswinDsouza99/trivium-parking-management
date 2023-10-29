import { Container, Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router";



const NavBar = () => {

  const navigate = useNavigate();

  function handleReservation() {
    navigate("/reservation/")
  }

  function handleHome() {
    navigate("/dashboard/")
  }

    return (
    <Navbar>
    <Container>
      <Navbar.Brand onClick={handleHome}>Trivium Parking Management</Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link onClick={handleHome}>Home</Nav.Link>
      <Nav.Link href="#booking">Booking</Nav.Link>
      <Nav.Link onClick={handleReservation}>Reservations</Nav.Link>
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