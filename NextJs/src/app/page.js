'use client'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Training from './training/Training'
import SideBar from "../component/sidebar/SideBar";
export default function Home() {
  return (
    <div  >
      <main >
        <Container fluid>
        <Row>
            <Col md={2} aria-label="SideBar" className="min-vh-100 d-flex flex-column p-0" style={{ backgroundColor: "#185165" }}>
              <SideBar></SideBar>
            </Col>
            <Col md={10} aria-label="Content" className="min-vh-100 content p-0"> 
            <Training></Training>
            </Col> 
          </Row>
          
        </Container>
     
      </main>
      <footer >
      
      </footer>
    </div>
  );
}
