import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <Navbar className="navbar">
        <Container className="nav">
            <NavbarBrand>S</NavbarBrand>
                <Nav className="fontNavLink">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Places</Nav.Link>
                    <Nav.Link>Tour Guide</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar