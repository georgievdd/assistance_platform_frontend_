import React from 'react'
import './style.css';
import { Button, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { parseTime, write } from '../../datafunc';
import { useState } from 'react';
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
    redactApplicationsMessage,
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
        <Nav.Link className='taskSeeLink'><Link>ссылке</Link></Nav.Link>
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
          <Form.Control
            className='mb-2'
            value={message}
            type="text"
            aria-label="Disabled input example"
            disabled
            readOnly
          />
          <Button variant="success" onClick={redactMessage}>редактировать</Button>
        </Form>
      </div>
      <div>
        <h3>
        Последнее обновление: {parseTime(updated_at).inDMH}
        </h3>
      </div>
      <RedactApplicationMessage 
        show={showRedact} 
        onHide={onHideRedact} 
        value={redactMsg}
        onChange={onChangeSetRedact}
        redact={redactApplicationsMessage}
      />
    </div>
  )
}

export default RedactMyApplicationsForm;