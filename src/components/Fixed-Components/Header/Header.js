import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftNav from '../Left-Nav/LeftNav';
import RightNav from '../Right-Nav/RightNav';
import { FcBusinessman } from "react-icons/fc";
import logo from "./appLogo.png";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar className='mb-3' collapseOnSelect expand="lg" bg="" variant="light">
                <Container>

                    <Navbar.Brand><Link to={'/'} className="text-decoration-none fs-2 fw-bold"><img
                        alt=""
                        src={logo}
                        width="45"
                        height="45"
                        className="d-inline-block align-top"
                    />{' '} BREAKING-CODE</Link ></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/blog' className="text-decoration-none">BLOG</Link></Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link >
                                {
                                    user?.uid ?
                                        <><span>{user?.displayName}</span>
                                            <Button onClick={handleLogOut} variant="primary" className='ms-2'>Log Out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to="/login" className="text-decoration-none">Login</Link>
                                            <Link to="/signup" className="text-decoration-none ms-2">Sign Up</Link>
                                        </>
                                }
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="">
                                {user?.photoURL ?
                                    <Image style={{ height: '30px' }} roundedCircle
                                        src={user?.photoURL}></Image> : <FcBusinessman className='fs-2'></FcBusinessman>}
                            </Nav.Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <RightNav></RightNav>
                        </div>
                        <div className='d-lg-none'>
                            <LeftNav></LeftNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;