import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col xs={3} aria-label="SideBar" style={{ backgroundColor: "#185165" }}>
                    <p>AppLevel</p>
                </Col>
                <Col xs={9} md={4} aria-label="Content"> 
                    Content
                </Col> 
            </Row>
        </Container>
    );
};

export default HomePage;