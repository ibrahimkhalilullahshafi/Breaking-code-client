import React, { useContext } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftNav from '../Left-Nav/LeftNav';
import RightNav from '../Right-Nav/RightNav';
import { FcBusinessman } from "react-icons/fc";
import logo from "./appLogo.png";
import { useEffect } from 'react';
import { useState } from 'react';
import "./header.css"

const Header = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);



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
                            <Nav><Link to='/blog' className="text-decoration-none fw-semibold fs-4 text-black">BLOG</Link></Nav>

                        </Nav>
                        <Nav>
                            <Nav>
                                <Form className='mt-2'><Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Dark"
                                    onClick={toggleTheme}
                                />
                                </Form>
                            </Nav>
                            <Nav>
                                {
                                    user?.uid ?
                                        <><span className='ms-2 mt-2'>{user?.displayName}</span>
                                            <Button onClick={handleLogOut} variant="primary" className='ms-2 mb-3'>Log Out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to="/login" className="text-decoration-none ms-2"><Button>Login</Button></Link>
                                            <Link to="/signup" className="text-decoration-none ms-2"><Button>Sign Up</Button></Link>
                                        </>
                                }
                            </Nav>
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