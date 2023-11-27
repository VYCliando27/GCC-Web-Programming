import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar className="navbar">
            <Container className="nav">
                <NavbarBrand>S</NavbarBrand>
                <Nav className="fontNavLink">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/places">Places</Nav.Link>
                    <Nav.Link as={Link} to="/tour">Tour Guide</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
