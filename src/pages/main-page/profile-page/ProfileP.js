import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../profile-page/profile-page-style.css';
import profileScreenDefault from '../../../res/img/profileScreenDefault.png';
import { useUserData } from '../../../hooks/useUserData';
import RedactAboutMeForm from '../../../forms/redactforms/RedactAboutMeForm';
import { useDispatch } from 'react-redux';
import { getUserData } from '../../../store/slices/actionCreators';
import { useNavigate } from 'react-router-dom';
import { MYTASKS, MYAPPLICATIONS, TODOTASKS } from '../../../components/routes/Routs';

const no = param => "no " + param + "(((";

const ProfileP = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {id} = useUserData();
	const user = useUserData();


	//console.log("user.my_tasks_amount: ", user.my_tasks_amount);

	useEffect(() => {
		dispatch(getUserData(id));
	}, [])

	const [showReadactAboutMe, setShowReadactAboutMe] = useState(false);

		const redactAboutMe = () => {
			setShowReadactAboutMe(true);
		}

		const toMyTasks = () => {
			navigate(MYTASKS);
		}

		const toMyApplications = () => {
			navigate(MYAPPLICATIONS);
		}

		const toTODOtasks = () => {
			navigate(TODOTASKS);
		}

	return (
		<div className='main-container'>
			<div>
				<div md="auto" id="main_info" className='container-element shadow' style={{padding: "20px"}}>
					<div id='header' className='profile-header container-element mb-5' style={{backgroundColor: "rgba(185,185,185,1)"}}>
						<Row>
							<Col md="auto"><img
								id="profile-icon"
								src={profileScreenDefault}
								className="profile-img"
							/></Col>
							<Col>
								<div className='profile-name profile-text'>{user.first_name} {user.last_name}</div>
								<div className='profile-email profile-text'>{user.email}</div>
							</Col>
							<Col>
							<div className='profile-email profile-text'>VK: {user.telegram}</div>
							<div className='profile-email profile-text'>Telegram: {user.vk}</div>
							</Col>
						</Row>
					</div>
					<Row>
						<Col id='about me' className='mb-5' md="auto" style={{width: "65%"}}>
							<h3 className='profile-text ml-10px'>About me</h3>
							<div className='container-element container-element' style={{backgroundColor: "rgba(185,185,185,1)", padding: "20px"}}>
								
								<div style={{display: "inline-block"}}>
										<div className='profile-descript-key'>First name:</div>
										<div className='profile-descript-value'>{user.first_name}</div>
								</div>
								<button style={{display: "inline-block", float: "right"}} className="redact-button" onClick={redactAboutMe}>Edit</button>
								<div>
									<div className='profile-descript-key'>Last name:</div>
									<div className='profile-descript-value'>{user.last_name}</div>
								</div>
								<div>
									<div className='profile-descript-key'>Stage of study:</div>
									<div className='profile-descript-value'>{user.stage_of_study}</div>
								</div>
								<div>
									<div className='profile-descript-key'>Course of study:</div>
									<div className='profile-descript-value'>{user.course_of_study}</div>
								</div>
								<div>
									<div className='profile-descript-key'>Contact phone:</div>
									<div className='profile-descript-value'>{user.phone ? user.phone : no("contact_phone")}</div>
								</div>
								<div>
									<div className='profile-descript-key'>Biography:</div>
									<div className='profile-descript-value'>{user.biography ? user.biography : no("biography")}</div>
								</div>
							</div>
						</Col>
						<Col id='tasks list'>
							<h3 className='profile-text ml-10px'>My tasks</h3>
							<div className='container-element container-element' style={{backgroundColor: "rgba(185,185,185,1)", padding: "20px"}}>
								<div className='profile-descript-key' style={{display: "block"}}>Active: {user.authored.active}</div>
								<div className='profile-descript-key' style={{display: "inline-block"}}>Total: {user.authored.total}</div>
								<button style={{display: "inline-block", float: "right", fontSize: "15px"}} className="to-button" onClick={toMyTasks}>{"➤➤➤"}</button>
							</div>
							<h3 className='profile-text ml-10px mt-4'>TODO tasks</h3>
							<div className='container-element container-element' style={{backgroundColor: "rgba(185,185,185,1)", padding: "20px"}}>
								<div className='profile-descript-key' style={{display: "block"}}>Active: {user.implementered.active}</div>
								<div className='profile-descript-key' style={{display: "inline-block"}}>Total: {user.implementered.total}</div>
								<button style={{display: "inline-block", float: "right", fontSize: "15px"}} className="to-button" onClick={toTODOtasks}>{"➤➤➤"}</button>
							</div>
							<h3 className='profile-text ml-10px mt-4'>My applications</h3>
							<div className='container-element container-element' style={{backgroundColor: "rgba(185,185,185,1)", padding: "20px"}}>
								<div className='profile-descript-key' style={{display: "block"}}>Active: {user.applications.active}</div>
								<div className='profile-descript-key' style={{display: "inline-block"}}>Total: {user.applications.total}</div>
								<button style={{display: "inline-block", float: "right", fontSize: "15px"}} className="to-button" onClick={toMyApplications}>{"➤➤➤"}</button>
							</div>
						</Col>
					</Row>
				</div>
			</div>
			<RedactAboutMeForm show={showReadactAboutMe} onHide={() => setShowReadactAboutMe(false)} username={user.username}/>
		</div>
	)
// return <div>wef</div>
}

export default ProfileP;