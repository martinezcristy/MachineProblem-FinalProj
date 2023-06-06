import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logoo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="custom-navbar">
      <Container>
        <Link to="/home" className="navbar-brand">BusTrax</Link>
        <Link to="/" className="navbar-brand"><img src={logo} alt='logo' width={42} /></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className="nav-link">Home</Nav.Link>
            <NavDropdown title="Bus Operators" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Rough Riders Bus</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ceres Bus</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Trip Schedule" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">North Bound</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">South Bound</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/signup" className="nav-link">Sign Up</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
