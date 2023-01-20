import React, { useEffect } from 'react';
import Navibar from '../../components/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import Routs from '../../components/routes/Routs';
import './main-page-style.css';
import '../../styles/containers.css';
import { useUserData } from '../../hooks/useUserData';
import { useAuth } from '../../hooks/useAuth';
import { setNotifications } from '../../store/slices/actionCreators';
import { useDispatch } from 'react-redux';
import { useNotifications } from '../../hooks/useNotifications';

const MainPage = () => {


	const user = useUserData();
	const dispatch = useDispatch();
	const {isAuth, access} = useAuth();
	const { New, notifications } = useNotifications();
	const navData = {
		New, 
		notifications,
		user,
		isAuth,
	}

	useEffect(() => {
		dispatch(setNotifications(access));
	}, []);

	return (
		<div>
			<div className='main-background' style={{minHeight: "1000px"}}>
				<Router>
					<Navibar data={navData}/>
					<Routs />
				</Router>
			</div>
		</div>
	);
}

export default MainPage
