import React, { useEffect, useState } from 'react';
import Navibar from '../../components/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import Routs from '../../components/routes/Routs';
import './main-page-style.css';
import '../../styles/containers.css';
import { useUserData } from '../../hooks/useUserData';
import { useAuth } from '../../hooks/useAuth';
import { getUserData, setNotifications } from '../../store/slices/actionCreators';
import { useDispatch } from 'react-redux';
import { useNotifications } from '../../hooks/useNotifications';
import Spinner from '../../forms/spinnerform/Spinner';
import { useLoad } from '../../hooks/useLoad';
import NotificationForm from '../../forms/notificationform/NotificationForm';
import { Offcanvas } from 'react-bootstrap';
import api from '../../api';
import { time_sleep } from '../../datafunc';

const MainPage = () => {

	const {loading, loadingPrev} = useLoad();

	const user = useUserData();
	const dispatch = useDispatch();
	const { isAuth, access } = useAuth();
	const { New, notifications } = useNotifications();
	console.log(notifications);
	const [moveNotify, setMoveNotify] = useState(notifications.map(() => ' '));

	const [spinnerClass, setSpinnerClass] = useState('');
	const [showNotifications, setShowNotifications] = useState(false);


	const closeNotifications = () => {
		setShowNotifications(false);
		api.notifications.notificationsClear(access);
		// window.location.reload();
	}
	// console.log(showNotifications);
	const openNotifications = () => {
		setShowNotifications(true);
	}

	const moveNotifyHandler = async () => {
		for (let i = 0; i < notifications.length; ++i) {
			setMoveNotify(moveNotify.map((e, index) => {
				if (index <= i) return ' notification-move';
				return '';
			}));
			await time_sleep(60);
		}
	}



	const navData = {
		New, 
		notifications,
		user,
		isAuth,
		openNotifications,
	}

	useEffect(() => {
		//! КАК ТОЛЬКО ПОЯВИТЯ access ДЕЛАТЬ ЗАПРОС НА ДАННЫЕ ПОЛЬЗОВАТЕЛЯ
		if (isAuth) {
			dispatch(getUserData(user.username));	
		}
	}, [access])

	useEffect(() => {
		if (loading) {
			setSpinnerClass('main-background spinner-on ');
		} else {
			if (loadingPrev) {
				setSpinnerClass('main-background spinner-off ');
			} else {
				setSpinnerClass('main-background');
			}
		}
	}, [loading]);

	useEffect(() => {
		// console.log("dispatch(setNotifications(access));");
		if (access) 
			dispatch(setNotifications(access));
	}, []);

	useEffect(() => {
		if (showNotifications) {
			moveNotifyHandler();
		} else {
			setMoveNotify(notifications.map(() => ''));
		}
	}, [showNotifications])

	return (
		<div>
			<Spinner show={loading} size={100}/>
			<div className={spinnerClass} style={{minHeight: "1000px"}}>
				<Router>
					<Navibar data={navData}/>
					<Routs />
				</Router>
			</div>
			<Offcanvas 
			 placement="end" 
			 show={showNotifications} 
			 onHide={closeNotifications} 
			 className='notifications-background'
			>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{color: "white"}}>Уведомления</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
					{
						notifications.map((notification, index) => (
							<div className='mb-3'>
								<NotificationForm data={notification} CLASS={moveNotify[index]}/>
							</div>
						))
					}
        </Offcanvas.Body>
      </Offcanvas>
		</div>
	);
}

export default MainPage
