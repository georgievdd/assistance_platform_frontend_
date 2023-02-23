import React from 'react';
import './redactforms-style.css';
import { Button, FloatingLabel, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { parseTime, write } from '../../datafunc';
import { useState } from 'react';
import deleteImg from '../../res/img/delete.png';
import RedactApplicationMessage from './RedactApplicationMessage';

const getStatus = status => {
  switch (status) {
    case 'R':
      return 'отклонено';
    case 'S':
      return 'отправлено';
    case 'A':
      return 'принятo';
    default:
      break;
  }
}


const taskSeeLinkStyle = {
  display: "inline-block",
  marginLeft: "10px",
  fontSize: "28px",
}


const RedactMyApplicationsForm = props => {

  const [showRedact, setShowRedact] = useState(false);

  if (props.data.application == null) return <div></div>;
  const {
    created_at,
    implementer_rating_normalized,
    status,
    task,
    message,
    updated_at,
  } = props.data.application;
  const {
    redactMsg,
    onChangeSetRedact,
    redactApplicationMessage,
    deleteApplication,
  } = props.data;

  const redactMessage = () => {
    setShowRedact(true);
  }

  const onHideRedact = () => {
    setShowRedact(false);
  }

  return (
    <div className='container-element shadow' style={{padding: "20px"}}>
      <div className='mb-3'>
        <h3 style={{display: "inline-block"}}>Просмотреть описание задания по </h3>
        <Nav.Link style={taskSeeLinkStyle}><Link>ссылке</Link></Nav.Link>
        {/*//!перекидывает на страницу с заданием по id*/}
      </div>
      <div className='mb-3'>
        <h3>Статус заявки: {getStatus(status)}</h3>
      </div>
      <div className='mb-3'>
        <h3>Отправлена: {parseTime(created_at).inDMH}</h3>
      </div>

      <div className='mb-3'>
        <Form>
          <Form.Label>
            <h3>
              Сообщение автору
            </h3>
          </Form.Label>
          <FloatingLabel controlId="floatingTextarea2">
            <Form.Control
              as="textarea"
              value={message} 
              style={{ height: '150px' }}
              disabled
            />
          </FloatingLabel>
          <Button variant="success" className='mt-3' onClick={redactMessage}>Редактировать</Button>
        </Form>
      </div>
      <div>
        <h3>
        Последнее обновление: {parseTime(updated_at).inDMH}
        </h3>
      </div>
      <div className='bottom-right' style={{marginTop: "-50px"}}>
        <img 
          src={deleteImg}
          width = "60px"
          className='defaultScale'
          onClick={deleteApplication}
        />
      </div>
      <RedactApplicationMessage 
        show={showRedact} 
        onHide={onHideRedact} 
        value={redactMsg}
        onChange={onChangeSetRedact}
        redact={redactApplicationMessage}
      />
    </div>
  )
}

export default RedactMyApplicationsForm;