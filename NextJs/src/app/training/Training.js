import './style.css'
import {Container, Row, Col} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import {useState} from 'react'

function Training (){
    const [currentCourse, updateCurrentCourse] = useState(false)
    const course = [{name: 'Data Analysis'}]
    return(
        <Container fluid className='training'> 

        <div className='training-content'> 

        <h3 className='training-header'> Welcome to Training Center</h3>
        <h5 className='training-subheader'> Select a Course</h5>
        <ListGroup>
      <ListGroup.Item  action  className='course-selection' href="#link1"> Master CSS in 10 hours</ListGroup.Item>
      <ListGroup.Item action  className='course-selection' href="#link1">Javascript for Beginner</ListGroup.Item>
      <ListGroup.Item action  className='course-selection' href="#link1"> Sequelize for Beginner </ListGroup.Item>
      <ListGroup.Item action  className='course-selection' href="#link1">Master Next JS</ListGroup.Item>
      <ListGroup.Item action  className='course-selection' onClick={()=>alert('clicked')} >Data Analysis</ListGroup.Item>

    </ListGroup>
        </div>
        </Container>
    )
}

export default Training