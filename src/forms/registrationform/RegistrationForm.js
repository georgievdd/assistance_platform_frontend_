import React, { Component, useContext, useState } from 'react'
import { Button, Modal, ModalTitle, Form, Nav, FloatingLabel, Row, Container, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../registrationform/registrationform-style.css';
import headerLogo from '../../res/img/headerLogo.svg';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../store/slices/userSlice';
import { loginUser, registrationUser } from '../../store/slices/actionCreators';
import { LOGIN } from '../../components/routes/Routs';
import InputV from '../validationforms/InputV';
import useInput from '../../hooks/useInput';
import LabelV from '../validationforms/LabelV';
import CheckBoxV from '../validationforms/CheckBoxV';
import useCheckBox from '../../hooks/useCheckBox';

const RegistrationForm = props => {


	const {
		email,
		username,
		password,
		repeatPassword,
		checkbox,
		register,
	} = props.data;



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



					<div>
						<h6 className="mb-4">Регистрация</h6>
					</div>
					<div className='mb-2'>
						<div className='reg-text-title'>Username</div>
						<InputV
							type={"text"}
							object={username}
						/> <LabelV 
							object={username}
						/>
					</div>
					<div className='mb-2'>
						<div className='reg-text-title'>Email</div>
						<InputV
							type={"email"}
							object={email}
						/> <LabelV 
							object={email}
						/>
					</div>
					<div className='mb-2'>
						<div className='reg-text-title'>Password</div>
						<InputV
							type={"password"}
							object={password}
						/> <LabelV 
							object={password}
						/>
					</div>
					<div className='mb-3'>
						<div className='reg-text-title'>Repeat password</div>
						<InputV
							type={"password"}
							object={repeatPassword}
						/> <LabelV 
							object={repeatPassword}
						/>
					</div>
					<Row>
						<Col md="auto">
							<div style={{marginLeft: "10px"}}>
								<CheckBoxV object={checkbox}/>
							</div>
						</Col>
						<Col style={{fontSize: "15px", marginLeft: "-12px"}}>
							Регистрируясь, вы принимаете Пользовательское соглашение,
							а также даёте согласие на обработку персональных данных на условиях Политики конфиденциальности.
						</Col>
					</Row>

					<Button variant="dark" className="reg-button mt-5" onClick={register}>Зарегестрироваться</Button>

					{/* <Form.Group controlId="email" className='mt-3'>
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
							value={repeatPassword}
							onChange={e => setRepeatPassword(e.target.value)}
						/>
					</Form.Group>
					
					<Form.Group className="mt-3" id="formGridCheckbox">
						<Form.Check
							style={{fontSize: "14px"}}
							required
							label="Регистрируясь, вы принимаете Пользовательское соглашение,
							а также даёте согласие на обработку персональных данных на условиях Политики конфиденциальности."
							// feedback="Вы должны согласиться перед отправкой."
							// feedbackType="invalid"
						/>
					</Form.Group>

					<Button variant="dark" className="reg-button mt-5" onClick={Handler}>Зарегестрироваться</Button> */}


				{/* <InputV
					type={"text"}
					object={msg}
				/> <LabelV 
					object={msg}
					error="переделай"
					ok="ok"
				/>

				<CheckBoxV 
					object={checkbox}
					id={1}
					style={{display: "inline-block"}}
				/> <LabelV 
					object={checkbox}
					error="плохо"
					ok="хорошо"
				/> */}

			</div>
		</div>
	);
}

export default RegistrationForm;