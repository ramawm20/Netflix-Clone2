import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(){
    return(
        <>
        <Navbar style={{ width: '100%'  }} bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><span style={{color :'green',fontSize:'30px'}}>Movies</span> List </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favorite">Fav</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar;