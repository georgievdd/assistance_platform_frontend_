import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RedactAboutMeForm = props => {

  const {
    biography,
    phone,
    course_of_study,
    email,
    first_name,
    last_name,
    stage_of_study,
    vk,
    telegram,
    choosesArray,
    redactHandler,

    setFirst_name,
    setLast_name,
    setCourse_of_study,
    setPhone,
    setBiography,
    setEmail,
    fileOnChange,
    setTelegram,
    setVk,

    stage_of_studyHandler
  } = props.data;

  return (
    <Modal
      show={props.show}
			onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Редактирование профиля
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Имя</h5>
				<Form.Control type='text' value={first_name} onChange={e => setFirst_name(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Фамилия</h5>
				<Form.Control type='text' value={last_name} onChange={e => setLast_name(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Этап обучения</h5>
				<Form.Select aria-label="Default select example" onChange={e => stage_of_studyHandler(e)}>
          {choosesArray.map(iter => <option>{iter[1]}</option>)}
        </Form.Select>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Курс обучения</h5>
				<Form.Control type='text' value={course_of_study} onChange={e => setCourse_of_study(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Контактный номер</h5>
				<Form.Control type='text' value={phone} onChange={e => setPhone(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Почта</h5>
				<Form.Control type='text' value={email} onChange={e => setEmail(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>ВК</h5>
				<Form.Control type='text' value={vk} onChange={e => setVk(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Телеграм</h5>
				<Form.Control type='text' value={telegram} onChange={e => setTelegram(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Биография</h5>
				<Form.Control as="textarea" value={biography} onChange={e => setBiography(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Сменить иконку профиля</h5>
				<Form.Group controlId="formFileLg" className="mb-3">
          <Form.Control type="file" size="lg" onChange={e => fileOnChange(e)} accept='image/*,.png,.jpg,.gif,.web'/>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='success' onClick={redactHandler}>Редактировать</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RedactAboutMeForm;