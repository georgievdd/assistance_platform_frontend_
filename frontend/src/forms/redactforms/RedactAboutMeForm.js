import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { redactProfile } from '../../api/profile';
import { useAuth } from '../../hooks/useAuth';
import { useUserData } from '../../hooks/useUserData';
import { HOST, VARIANT } from '../../api/instance';
import api from '../../api';
import EndPoints from '../../api/endPoints';
import { getUserData, loginUser } from '../../store/slices/actionCreators';
import { useDispatch } from 'react-redux';
import { useHref, useNavigate } from 'react-router-dom';
import { setUserInfo } from '../../store/slices/userSlice';
import { useInformational_endpoint } from '../../hooks/useInformational_endpoint';
import { setProfile } from '../../api/user';

const RedactAboutMeForm = props => {



  const {username} = useUserData();
  const { id } = useUserData();
  const {access} = useAuth();

  // const [username, setUsername] = useState(useUserData().username);
  const [first_name, setFirst_name] = useState(useUserData().first_name);
  const [last_name, setLast_name] = useState(useUserData().last_name);
  const [stage_of_study, setStage_of_study] = useState(useUserData().stage_of_study);
  const [course_of_study, setCourse_of_study] = useState(useUserData().course_of_study);
  const [contact_phone, setContact_phone] = useState(useUserData().contact_phone);
  const [biography, setBiography] = useState(useUserData().biography);
  const [contact_email, setContact_email] = useState(useUserData().contact_email);
  const [email, setEmail] = useState(useUserData().email);
  const [profile_image, setProfile_image] = useState(useUserData().profile_image);
  const [contact_tg, setContact_tg] = useState(useUserData().contact_tg);
  const [contact_vk, setContact_vk] = useState(useUserData().contact_vk);

  const redactHandler = () => {
    console.log(biography);

    const res = async () => 
      redactProfile(username, access, {
        biography,
        contact_email,
        contact_phone,
        course_of_study,
        email,
        first_name,
        id,
        last_name,
        profile_image: null,
        stage_of_study,
        username,
        contact_vk,
        contact_tg,
      })
  
    // dispatch(getUserData({username}));
    window.location.reload();
  }

  const choosesArray = useInformational_endpoint().stage_of_study_choices;
  console.log(choosesArray);

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
        {/* <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Username</h5>
				<Form.Control type='text' value={username} onChange={e => setUsername(e.target.value)}/> */}
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Имя</h5>
				<Form.Control type='text' value={first_name} onChange={e => setFirst_name(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Фамилия</h5>
				<Form.Control type='text' value={last_name} onChange={e => setLast_name(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Этап обучения</h5>
				<Form.Select aria-label="Default select example">
          {choosesArray.map(iter => <option>{iter}</option>)}
        </Form.Select>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Курс обучения</h5>
				<Form.Control type='text' value={course_of_study} onChange={e => setCourse_of_study(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Контактный номер</h5>
				<Form.Control type='text' value={contact_phone} onChange={e => setContact_phone(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Почта</h5>
				<Form.Control type='text' value={email} onChange={e => setContact_phone(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>ВК</h5>
				<Form.Control type='text' value={contact_vk} onChange={e => setContact_vk(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Телеграм</h5>
				<Form.Control type='text' value={contact_tg} onChange={e => setContact_tg(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Контактная почта</h5>
        <Form.Control type='text' value={contact_email} onChange={e => setContact_email(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Биография</h5>
				<Form.Control as="textarea" value={biography} onChange={e => setBiography(e.target.value)}/>
        <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Иконка профиля</h5>
				<Form.Group controlId="formFileLg" className="mb-3">
          <Form.Control type="file" size="lg" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='success' onClick={redactHandler}>Редактировать</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RedactAboutMeForm;