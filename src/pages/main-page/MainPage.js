import React, { useEffect, useState } from 'react';
import Navibar from '../../components/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import Routs from '../../components/routes/Routs';
import './main-page-style.css';
import '../../styles/containers.css';
import { useUserData } from '../../hooks/useUserData';
import { useAuth } from '../../hooks/useAuth';
import { getUserData, setInformational_endpoint, setNotifications } from '../../store/slices/actionCreators';
import { useDispatch } from 'react-redux';
import { useNotifications } from '../../hooks/useNotifications';
import Spinner from '../../forms/spinnerform/Spinner';
import { useLoad } from '../../hooks/useLoad';
import NotificationForm from '../../forms/notificationform/NotificationForm';
import { Offcanvas } from 'react-bootstrap';
import api from '../../api';
import { time_sleep } from '../../datafunc';
import { clearApplicationsSlice } from '../../store/slices/applicationsSlice';
import { clearInformational_endpoint } from '../../store/slices/informational_endpointSlice';
import { clearMyTasksSlice } from '../../store/slices/myTasksSlice';
import { clearNotificationsSlice } from '../../store/slices/notificationsSlice';
import { clearTODOtasksSlice } from '../../store/slices/todoTasksSlice';
import { clearTasksSlice } from '../../store/slices/tasksSlice';
import { clearUserSlice, deleteUser } from '../../store/slices/userSlice';
import { clearUsersSlice } from '../../store/slices/usersSlice';
import { clearTaskInfoSlice } from '../../store/slices/taskInformationSlice';

const MainPage = () => {

	const {loading, loadingPrev} = useLoad();

	const user = useUserData();
	const dispatch = useDispatch();
	const { isAuth, access } = useAuth();
	const { New, notifications } = useNotifications();
	// console.log(notifications);
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


	const clearAccount = () => {
		console.log("clear");
		dispatch(clearUserSlice());
		dispatch(clearApplicationsSlice());
		// dispatch(clearInformational_endpoint());
		dispatch(clearMyTasksSlice());
		dispatch(clearNotificationsSlice());
		// dispatch(clearTasksSlice());
		dispatch(clearTODOtasksSlice());
		dispatch(clearTaskInfoSlice());
		dispatch(clearUserSlice());
		dispatch(clearUsersSlice());

		// console.log("isAuthisAuthisAuthisAuth", isAuth);
		// window.location.reload();
	}



	const navData = {
		New, 
		notifications,
		user,
		isAuth,
		openNotifications,
		clearAccount,
	}

	useEffect(() => {
		if (isAuth) {
			dispatch(getUserData(user.username));
			dispatch(setNotifications(access));
			// window.location.reload();
		}
	}, [isAuth]);

	useEffect(() => {
		console.log("notificationsnotifications", notifications);
	}, [notifications]);

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
		if (showNotifications) {
			moveNotifyHandler();
		} else {
			setMoveNotify(notifications.map(() => ''));
		}
	}, [showNotifications]);

	useEffect(() => {
		dispatch(setInformational_endpoint());
	}, []);

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
