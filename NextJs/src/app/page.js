
import React from "react";
import styles from "./style.css";
import {Container, Row, Col} from 'react-bootstrap'

export default function Home() {
  return (
    <div  >
      <main >
        <Container >
        <Row>
            <Col md={3} aria-label="SideBar" style={{ backgroundColor: "#185165" }}>
              <p>AppLevel</p>
            </Col>
            <Col md={4} aria-label="Content"> Content</Col> 
          </Row>
          
        </Container>
     
      </main>
      <footer >
      
      </footer>
    </div>
  );
}
