import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Fixed-Components/Footer/Footer';
import Header from '../components/Fixed-Components/Header/Header';
import LeftNav from '../components/Fixed-Components/Left-Nav/LeftNav';
import RightNav from '../components/Fixed-Components/Right-Nav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg="8">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="2" className='d-none d-lg-block'>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer className='position-fixed fixed-bottom'></Footer>
        </div>
    );
};

export default Main;