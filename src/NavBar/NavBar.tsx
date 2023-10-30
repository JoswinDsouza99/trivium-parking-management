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
      <Navbar.Brand onClick={handleHome} className='navBarText'>Trivium Parking Management</Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link onClick={handleHome} className='navBarText'>Home</Nav.Link>
      <Nav.Link href="#booking" className='navBarText'>Booking</Nav.Link>
      <Nav.Link onClick={handleReservation} className='navBarText'>Reservations</Nav.Link>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className='navBarText'>
          Signed in as: <a href="#login" className='navBarText'>{localStorage.getItem("empID")}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;