import React, { Component, useContext, useState } from 'react'
import { Button, Modal, ModalTitle, Form, Nav, FloatingLabel, Row, Container, Col } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../loginform/loginform-style.css';
import headerLogo from '../../res/img/headerLogo.svg';
import { useDispatch } from 'react-redux';
import { getUserData, loginUser } from '../../store/slices/actionCreators';
import { REGISTRATION } from '../../components/routes/Routs';

const Login = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const emailOnChange = e => {
		setEmail(e.target.value);
	}
	const passwordOnChange = e => {
		setPassword(e.target.value);
	}

	const handler = () => {
		dispatch(loginUser({ username: email, password }));
		dispatch(getUserData(email));
		navigate('/tasks');
	}

	return (
		<div className='logform-container'>
			<div className='log-reg-header-container container-element-white shadow'>
				<p style={{display: "inline-block", paddingRight: "5px"}}>Don't have an account yet?</p>
				<Nav.Link style={{ display: "inline-block" }}><Link
					className='link-default'
					to={REGISTRATION}>Register</Link>
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
						<h6 className="mb-4">log in</h6>
					</div>

					<FloatingLabel
						controlId="fromBasicEmail"
						label="Email address"
						className="mb-4"
					>
						<Form.Control
							type="email"
							placeholder="name@example.com"
							value={email}
							onChange={emailOnChange}
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
							value={password}
							onChange={passwordOnChange}
						/>
					</FloatingLabel>

					<Nav.Link className='mb-4'><Link className="link-default" to="">Forgot password?</Link></Nav.Link>

					<Button variant="dark" className="login-button mb-5"
						onClick={handler}
					>log in</Button>

				</Form>
			</div>
		</div>
	);
}

export default Login;