import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import { auth } from '../firebase';
import { useAuth } from '../context/AuthContext';


export default function Navigationbar(){
    const { currentUser } = useAuth();

    const handleLogOut = async () => {
        try {
            await auth.signOut();
            console.log("User logged out");
        } catch (err) {
            console.error("Logout error", err)
        }
    }

    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand >Never Quit Dreaming</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className='me-auto'>
                        {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
                    </Nav>
                    <Nav>
                        {currentUser ? (
                            <div>
                            <Navbar.Text>
                                Signed in as: <a href="#login">{currentUser.email}</a>
                            </Navbar.Text>
                            <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>

                            </div>
                        ) : (
                            <div>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

