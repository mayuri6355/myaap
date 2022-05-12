
import {Container,Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto ms-auto">
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/about">About</Link>
        <Link className='nav-link' to="/contact">Contact</Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}
export default Header;