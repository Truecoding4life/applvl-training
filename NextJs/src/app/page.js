'use client'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from "./style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Home() {
  return (
    <div  >
      <main >
        <Container fluid>
        <Row>
            <Col md={2} aria-label="SideBar" className="min-vh-100 d-flex flex-column" style={{ backgroundColor: "#185165" }}>
              <p>AppLevel</p>
            </Col>
            <Col md={10} aria-label="Content" className="min-vh-100 d-flex flex-column"> 
            <p> Content</p>
            </Col> 
          </Row>
          
        </Container>
     
      </main>
      <footer >
      
      </footer>
    </div>
  );
}
