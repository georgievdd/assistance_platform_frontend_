import React, { Component, useContext, useState } from 'react'
import { Button, Modal, ModalTitle, Form, Nav, FloatingLabel, Row, Container, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../registrationform/registrationform-style.css';
import headerLogo from '../../res/img/headerLogo.svg';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../store/slices/userSlice';
import { loginUser, registrationUser } from '../../store/slices/actionCreators';
import { LOGIN } from '../../components/routes/Routs';

const RegistrationForm = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	const Handler = () => {
		dispatch(registrationUser({username, password, email}));
		navigate('/profile');
	}

	return (
		<div className='regform-container'>
			<div className='log-reg-header-container shadow container-element-white'>
				<p style={{display: "inline-block"}}>Уже есть аккаунт?</p>
				<Nav.Link style={{ display: "inline-block", paddingLeft: "5px" }}><Link
					className='link-default'
					to={LOGIN}>Войдите</Link>
				</Nav.Link>
			</div>
			<div className='shadow container-element-white reg-container'>
				<div className='mb-2'>
					<img
						width={50}
						height={50}
						src={headerLogo}
					/>
					<h1 style={{display: "inline-block"}} className="reg-text-header">Assistance Platform</h1>
				</div>

				<Form noValidate validated={true} onSubmit={null}>

					<div>
						<h6 className="mb-4">Регистрация</h6>
					</div>

					<Form.Group controlId="username">
						<Form.Label>Имя пользователя</Form.Label>
						<Form.Control
							required
							placeholder="username"
							className=''
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid" style={{marginTop: "0px"}}>
              Пожалуйста, введите username.
						</Form.Control.Feedback>
						{/* <Form.Control.Feedback type="valid">
            	OK.
            </Form.Control.Feedback> */}
					</Form.Group>

					<Form.Group controlId="email" className='mt-3'>
						<Form.Label>Почта</Form.Label>
						<Form.Control
							required
							type="email"
							placeholder="mail@mail.ru"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid" style={{marginTop: "0px"}}>
              Неверный формат.
						</Form.Control.Feedback>
						{/* <Form.Control.Feedback type="valid">
						хорошо.
            </Form.Control.Feedback> */}
					</Form.Group>

					<Form.Group controlId="password" className='mt-3'>
						<Form.Label>Пароль</Form.Label>
						<Form.Control
							required
							type="password"
							placeholder="123456789"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId="repeatPassword" className='mt-3'>
						<Form.Label>Подтверждение пароля</Form.Label>
						<Form.Control
							required
							type="password"
							placeholder="123456789"
							value={repeatPassword.value}
							onChange={e => setRepeatPassword(e.target.value)}
						/>
					</Form.Group>
					
					<Form.Group className="mt-3" id="formGridCheckbox">
						<Form.Check
							style={{fontSize: "14px"}}
							required
							label="Регистрируясь, вы принимаете Пользовательское соглашение,
							а также даёте согласие на обработку персональных данных на условиях Политики конфиденциальности."
							feedback="Вы должны согласиться перед отправкой."
							feedbackType="invalid"
						/>
					</Form.Group>

					<Button variant="dark" className="reg-button mt-5" onClick={Handler}>Зарегестрироваться</Button>

				</Form>
			</div>
		</div>
	);
}

export default RegistrationForm;