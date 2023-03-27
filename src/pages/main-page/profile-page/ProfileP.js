import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../profile-page/profile-page-style.css';
import profileScreenDefault from '../../../res/img/profileScreenDefault.png';
import { useUserData } from '../../../hooks/useUserData';
import RedactAboutMeForm from '../../../forms/redactforms/RedactAboutMeForm';
import { useDispatch } from 'react-redux';
import { editProfileAndContacts, getProfileData, getUserData } from '../../../store/slices/actionCreators';
import { useNavigate } from 'react-router-dom';
import { MYTASKS, MYAPPLICATIONS, TODOTASKS } from '../../../components/routes/Routs';
import { useAuth } from '../../../hooks/useAuth';
import { useInformational_endpoint } from '../../../hooks/useInformational_endpoint';
import { getFirstElBySecondElInArray, getSecondElByFirstElInArray } from '../../../datafunc';

const no = param => "no " + param + "(((";

const ProfileP = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const fileReader = new FileReader();

	const user = useUserData();
	const {access} = useAuth();

	const [first_name, setFirst_name] = useState(user.first_name);
  const [last_name, setLast_name] = useState(user.last_name);
  const [stage_of_study, setStage_of_study] = useState(user.stage_of_study);
  const [course_of_study, setCourse_of_study] = useState(user.course_of_study);
  const [phone, setPhone] = useState(user.phone);
  const [biography, setBiography] = useState(user.biography);
  const [email, setEmail] = useState(user.email);
  const [profile_image, setProfile_image] = useState(user.profile_image);
  const [telegram, setTelegram] = useState(user.telegram);
  const [vk, setVk] = useState(user.vk);
	const choosesArray = useInformational_endpoint().stage_of_study_choices_info;
	
	const stage_of_studyHandler = e => {
		setStage_of_study(getFirstElBySecondElInArray(e.target.value, choosesArray));
	}

	fileReader.onloadend = () => {
		setProfile_image(fileReader.result);
	};

	const fileOnChange = e => {
		e.preventDefault();
		fileReader.readAsDataURL(e.target.files[0]);
	}


	const redactHandler = () => {

		const profile = {
			first_name,
			last_name,
			biography,
			profile_image: null,
			stage_of_study,
			course_of_study,
		};

		const contacts = {
			first_name,
			email,
			phone,
			telegram,
			vk,
		};


		// console.log("profile", profile);

		// console.log(contacts);

		dispatch(editProfileAndContacts(access, user.id, contacts, profile));

		// window.location.reload();
    
  }

	useEffect(() => {
		dispatch(getProfileData(access, user.id));
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


		const dataTo = {
				biography,
        phone,
        course_of_study,
        email,
        first_name,
        last_name,
        profile_image: null,
        stage_of_study,
        vk,
        telegram,
				choosesArray,
				redactHandler,

				setFirst_name,
				setLast_name,
				stage_of_studyHandler,
				setCourse_of_study,
				setPhone,
				setBiography,
				setEmail,
				fileOnChange,
				setTelegram,
				setVk,
		};



	

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
							<div className='profile-email profile-text'>VK: {user.vk}</div>
							<div className='profile-email profile-text'>Telegram: {user.telegram}</div>
							</Col>
						</Row>
					</div>
					<Row>
						<Col id='about me' className='mb-5' md="auto" style={{width: "65%"}}>
							<h3 className='profile-text ml-10px'>Профиль</h3>
							<div className='container-element container-element' style={{backgroundColor: "rgba(185,185,185,1)", padding: "20px"}}>
								
								<div style={{display: "inline-block"}}>
										<div className='profile-descript-key'>Имя:</div>
										<div className='profile-descript-value'>{user.first_name}</div>
								</div>
								<button style={{display: "inline-block", float: "right"}} className="redact-button" onClick={redactAboutMe}>Edit</button>
								<div>
									<div className='profile-descript-key'>Фамилия:</div>
									<div className='profile-descript-value'>{user.last_name}</div>
								</div>
								<div>
									<div className='profile-descript-key'>Этап обучения:</div>
									<div className='profile-descript-value'>{getSecondElByFirstElInArray(user.stage_of_study, choosesArray)}</div>
								</div>
								<div>
									<div className='profile-descript-key'>Курс обучения:</div>
									<div className='profile-descript-value'>{user.course_of_study}</div>
								</div>
								<div>
									<div className='profile-descript-key'>Почта:</div>
									<div className='profile-descript-value'>{user.email}</div>
								</div>
								<div>
									<div className='profile-descript-key'>Контактный номер:</div>
									<div className='profile-descript-value'>{user.phone ? user.phone : no("contact_phone")}</div>
								</div>
								<div>
									<div className='profile-descript-key'>О себе:</div>
									<div className='profile-descript-value'>{user.biography ? user.biography : no("biography")}</div>
								</div>
							</div>
						</Col>
						<Col id='tasks list'>
							<h3 className='profile-text ml-10px'>Мои задания</h3>
							<div className='container-element container-element' style={{backgroundColor: "rgba(185,185,185,1)", padding: "20px"}}>
								<div className='profile-descript-key' style={{display: "block"}}>Active: {user.authored.active}</div>
								<div className='profile-descript-key' style={{display: "inline-block"}}>Total: {user.authored.total}</div>
								<button style={{display: "inline-block", float: "right", fontSize: "15px"}} className="to-button" onClick={toMyTasks}>{"➤➤➤"}</button>
							</div>
							<h3 className='profile-text ml-10px mt-4'>Делаю сейчас</h3>
							<div className='container-element container-element' style={{backgroundColor: "rgba(185,185,185,1)", padding: "20px"}}>
								<div className='profile-descript-key' style={{display: "block"}}>Active: {user.implementered.active}</div>
								<div className='profile-descript-key' style={{display: "inline-block"}}>Total: {user.implementered.total}</div>
								<button style={{display: "inline-block", float: "right", fontSize: "15px"}} className="to-button" onClick={toTODOtasks}>{"➤➤➤"}</button>
							</div>
							<h3 className='profile-text ml-10px mt-4'>Мои заявки</h3>
							<div className='container-element container-element' style={{backgroundColor: "rgba(185,185,185,1)", padding: "20px"}}>
								<div className='profile-descript-key' style={{display: "block"}}>Active: {user.applications.active}</div>
								<div className='profile-descript-key' style={{display: "inline-block"}}>Total: {user.applications.total}</div>
								<button style={{display: "inline-block", float: "right", fontSize: "15px"}} className="to-button" onClick={toMyApplications}>{"➤➤➤"}</button>
							</div>
						</Col>
					</Row>
				</div>
			</div>
			<RedactAboutMeForm show={showReadactAboutMe} onHide={() => setShowReadactAboutMe(false)} data={dataTo}/>
		</div>
	)
// return <div>wef</div>
}

export default ProfileP;