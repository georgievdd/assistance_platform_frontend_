import { Button, Modal, ModalTitle, Form, Nav, Row, Col } from 'react-bootstrap';
import LoginTrueForm from '../../forms/logintrueform/LoginTrueForm';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../../styles/links.css';
import { useAuth } from '../../hooks/useAuth';
import { useUserData } from '../../hooks/useUserData';
import { LOGIN, REGISTRATION, TASKS } from '../routes/Routs';
import headerLogo from '../../res/img/headerLogo.svg';

const Navibar = props => {

	const { isAuth,
					notifications,
					New,
					user } = props.data;

	const loginTrueFormData = {
		user,
		notifications,
		New,
	}

	const navbarStyle = {
		width: "100%",
		paddingLeft: "190px",
		paddingRight: "190px",
		textAlign: "center",
		verticalAlign: "middle"
	};

	const headerStyle = {
		paddingLeft: "10px",
		paddingTop: "0%",
		paddingBottom: "0%",
	};
	
	const headerTextStyle = {
		display: "inline-block",
		color: "rgba(255, 255, 255, 1)",
		verticalAlign: "-4px",
		paddingLeft: "10px",
	};

	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{paddingRight: "100px", paddingLeft: "100px"}}>
					
				

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">

					
						
					<Row style={navbarStyle}>

						<Col md="auto">
							<div style={headerStyle}>
								<img
									width="50px"
									height="50px"
									src={headerLogo}
								/>
								<h5 style={headerTextStyle}>Assistance Platform</h5>
							</div>
						</Col>
						
						{!isAuth ?
							<Col md="auto" style={{margin: "0 auto"}}><Nav>
								<Nav.Link><Link className='link-standart' to={TASKS}>Задания</Link></Nav.Link>
							</Nav></Col> :
							<Col md="auto" style={{margin: "0 auto", width: '10px'}}>
							</Col>
						}

						<Col md="auto"><Nav>
							{isAuth ? 
							<div>
								<LoginTrueForm data={loginTrueFormData}/>
							</div>
							:
							<>
								<Nav.Link><Link className='link-standart' to={LOGIN}>Войти</Link></Nav.Link>
								<Nav.Link><Link className='link-standart' to={REGISTRATION}>Зарегистрироваться</Link></Nav.Link>
							</>
							}
						</Nav></Col>
					</Row>
						
						
					</Navbar.Collapse>
				
			</Navbar>

		</div>
	);
}
export default Navibar;