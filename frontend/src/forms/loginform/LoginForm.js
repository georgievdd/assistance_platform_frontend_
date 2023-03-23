import React, { Component, useContext, useState } from 'react'
import { Button, Modal, ModalTitle, Form, Nav, FloatingLabel, Row, Container, Col } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../loginform/loginform-style.css';
import headerLogo from '../../res/img/headerLogo.svg';
import { useDispatch } from 'react-redux';
import { getUserData, loginUser } from '../../store/slices/actionCreators';
import { REGISTRATION } from '../../components/routes/Routs';
import { useAuth } from '../../hooks/useAuth';
import useInput from '../../hooks/useInput';
import InputV from '../validationforms/InputV';

const Login = props => {

	const {
		email,
		password,
		handler,
	} = props.data;

	return (
		<div className='logform-container'>
			<div className='log-reg-header-container container-element-white shadow'>
				<p style={{display: "inline-block", paddingRight: "5px"}}>Ещё нет аккаунта?</p>
				<Nav.Link style={{ display: "inline-block" }}><Link
					className='link-default'
					to={REGISTRATION}>Зарегистрируйтесь</Link>
				</Nav.Link>
			</div>
			<div className='login-container container-element-white shadow'>
				<div className='mb-2'>
					<img
						width={50}
						height={50}
						src={headerLogo}
					/>
					<h1 style={{display: "inline-block"}} className="login-text-header">Assistance Platform</h1>
				</div>



				<Form>

					<div>
						<h6 className="mb-4">Вход в аккаунт</h6>
					</div>

					{/* <FloatingLabel
						controlId="fromBasicEmail"
						label="Username"
						className="mb-4"
					>
						<Form.Control
							type="email"
							placeholder="name@example.com"
							value={email.value}
							onChange={email.onChange}
							onBlur={email.onBlur}
						/>
					</FloatingLabel>

					<FloatingLabel 
						controlId="floatingPassword" 
						label="Password"
						className='mb-2'
					>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password.value}
							onChange={password.onChange}
							onBlur={password.onBlur}
						/>
					</FloatingLabel> */}

					<div className='mb-4'>
						<InputV
							object={email}
							type="text"
							container="floathingLabel"
							label="username"
						/>
					</div>

					<div className='mb-4'>
						<InputV
							object={password}
							type="password"
							container="floathingLabel"
							label="password"
						/>
					</div>


					<Nav.Link className='mb-4'><Link className="link-default" to="">Забыли пароль?</Link></Nav.Link>

					<Button variant="dark" className="login-button mb-5" onClick={handler}>Войти</Button>

				</Form>
			</div>
		</div>
	);
}

export default Login;