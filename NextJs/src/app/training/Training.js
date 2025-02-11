'use client'
import './style.css'
import 'animate.css';
import {Container, Row, Col} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import {useState} from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { IoAlertCircle } from "react-icons/io5";

function Training (){
    const [show, setShow] = useState(false);
    const [currentCourse, updateCurrentCourse] = useState(false)
    const course = [{name: 'Data Analysis'}]
    if(currentCourse){
        console.log(currentCourse)
    }
    const AlertError = ()=> setShow(true)
    return(
        <Container fluid className='training'> 
        {show ? (
            <Alert className='error-alert animate__animated animate__fadeInDown' style={{ top:20 }} onClose={() => setShow(false)} dismissible>
        <Alert.Heading> <IoAlertCircle/> Error 404</Alert.Heading>
        <p>
          Course not found
        </p>
      </Alert>
    ): null }
        <div className='training-content'> 
        
        {currentCourse === false ? (
        <div>
         <h3 className='training-header'> Welcome to Training Center</h3>
        <h5 className='training-subheader'> Select a Course</h5>
        <ListGroup>
      <ListGroup.Item action  className='course-selection' onClick={()=>updateCurrentCourse('Data Analysis')}  >Data Analysis</ListGroup.Item>
      <ListGroup.Item  action  className='course-selection' onClick={AlertError} > Master CSS in 10 hours</ListGroup.Item>
      <ListGroup.Item action  className='course-selection' onClick={AlertError} >Javascript for Beginner</ListGroup.Item>
      <ListGroup.Item action  className='course-selection' onClick={AlertError} > Sequelize for Beginner </ListGroup.Item>
      <ListGroup.Item action  className='course-selection' onClick={AlertError} >Master Next JS</ListGroup.Item>
    </ListGroup> 
    </div> ) : (
        <div>
            <h3> This is {currentCourse}</h3>
        </div>
        )}

        </div>
        </Container>
    )
}

export default Training