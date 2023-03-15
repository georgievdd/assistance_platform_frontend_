import { useState } from "react";
import { Col, Row, Form, FloatingLabel, Nav, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { parseTime } from "../../datafunc";
import { useAuth } from "../../hooks/useAuth";
import { setDoerStorage } from "../../store/slices/actionCreators";
import ApplicationForm from "../applicationform/ApplicationForm";
import ApplicationForm2 from "../applicationform/ApplicationForm2";


const getStatus = status => {
  switch (status) {
    case 'R': return 'отклонено';
    case 'S': return 'отправлено';
    case 'A': return 'принятo';
    default:
      break;
  }
}

const taskSeeLinkStyle = {
  display: "inline-block",
  marginLeft: "10px",
  fontSize: "28px",
}

/*
applicant
created_at
id
implementer_rating_normalized
message
status
task
updated_at
*/


const TaskApplicationsForm = props => {

  const task = props.data[0].task;
  const applications = props.data;
  const {access} = useAuth();
  const dispatch = useDispatch();

  const [applChoose, setChooseApplication] = useState(applications[0]);
  console.log(applChoose);

  const appicationHandler = index => {
    setChooseApplication(applications[index]);
  }

  const setDoer = () => {
    const username = applChoose.applicant;
    const id = task.id;
    console.log(username);
    dispatch(setDoerStorage(access, id, username));
  }

  const recent = () => {

  }

  return (
    <div>
      <Row>
        <Col md="auto" style={{width: "40%"}}>
          <div className='slicer-scroll'>
            {
              applications.map((application, index) => (
                <div style={{marginBottom: "10px"}} onClick={() => appicationHandler(index)}>
                  <ApplicationForm2 data={application} task={task}/>
                </div>
              ))
            }
          </div>
        </Col>
        <Col>
          <div className='container-element shadow' style={{padding: "20px"}}>
            <div className='mb-3'>
              <h3 style={{display: "inline-block"}}>Посмотреть профиль пользователя</h3>
              <Nav.Link style={taskSeeLinkStyle}><Link>{applChoose.applicant}</Link></Nav.Link>
              {/*//!перекидывает на страницу с профилем (общая->конкретный) по id*/}
            </div>
      
            <div className='mb-3'>
              <h3>Последнее изменение: {parseTime(applChoose.updated_at).inDMH}</h3>
            </div>

            <Form className='mb-3'>
              <Form.Label>
                <h3>
                  Сообщение
                </h3>
              </Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  value={applChoose.message} 
                  style={{ height: '150px' }}
                  disabled
                />
              </FloatingLabel>
            </Form>

            <Row>
              <Col md="auto" style={{margin: "0 auto"}}>
                <Button 
                  variant="success" 
                  style={{width: "250px", height: "60px"}}
                  onClick={setDoer}
                >Назначить исполнителем</Button>
              </Col>
              <Col md="auto" style={{margin: "0 auto"}}>
                <Button 
                 variant="danger"
                 style={{width: "250px", height: "60px"}}
                 onClick={recent}
                >Отклонить</Button>
              </Col>
            </Row>
              
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default TaskApplicationsForm;