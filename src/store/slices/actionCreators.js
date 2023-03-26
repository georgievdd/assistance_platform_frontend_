import api from '../../api';
import { setAuthDataLoad, setAuthLoad, setUser, setUserInfo } from './userSlice';
import { getTasks, putTask, putTaskForRedact, setTasksLoad } from './tasksSlice';
import { setMyTasks, setMyTasksLoad } from './myTasksSlice';
import { setProfile_choices_info, setFilters_info, setSubjects_info, setTags_info, setInformationalEndpointLoad } from './informational_endpointSlice';
import { setTODOtasks, setTodoTasksLoad } from './todoTasksSlice';
import { putNotifications, setNotificationsLoad } from './notificationsSlice';
import { putChooseApplicationsInformation, putMyApplications, setApplicationsLoad } from './applicationsSlice';
import { LOAD_BEGIN, LOAD_END, LOAD_ERROR } from '../../datafunc';
import { setUsers, setUsersLoad } from './usersSlice';
import { putTasInfo, setTaskInfoLoad } from './taskInformationSlice';
import { setSendApplicationLoad } from './sendApplicationSlice';
import { useNavigate } from 'react-router-dom';
import { TASKS } from '../../components/routes/Routs';

// export const loginUser = data =>
// 	dispatch => {

// 		// dispatch(setAuthLoad.begin());

// 		return async () => {
// 			const res = await api.auth.login(data)
// 			.then(data => data.data);
// 			console.log("AUTH RES", res);
// 			dispatch(setUser(res));
// 		}

// 	}

export const loginUser = data => 
		async (dispatch) => {

			dispatch(setAuthLoad(LOAD_BEGIN));

			const res = await api.auth.login(data)
			.then(data => data.data);
			// console.log(res);
			dispatch(setAuthLoad(LOAD_END));
			dispatch(setUser(res));
		}

export const getUserData = (data) =>
	async (dispatch) => {

		dispatch(setAuthDataLoad(LOAD_BEGIN));

		const res = await api.user.userInfo(data);

		dispatch(setAuthDataLoad(LOAD_END));
		dispatch(setUserInfo(res.data));
	}
//! without load
export const registrationUser = data => 
	async (dispatch) => {
		const res = await api.auth.registration(data)
		.then(data => data.data);

		dispatch(loginUser({username: data.username, password: data.password}));
		dispatch(getUserData( data.username ));

	}

export const setTasks = (urlRequest) =>
	async (dispatch) => {
		dispatch(setTasksLoad(LOAD_BEGIN));

		const res = await api.tasks.tasks(urlRequest)
		.then(data => data.data)

		dispatch(setTasksLoad(LOAD_END));
		dispatch(getTasks(res));
	}

export const setTasksAuth = (access, urlRequest) =>
	async (dispatch) => {
		dispatch(setTasksLoad(LOAD_BEGIN));

		const res = await api.tasks.tasksA(access, urlRequest)
		.then(data => data.data)

		dispatch(setTasksLoad(LOAD_END));
		dispatch(getTasks(res));
	}

export const setTask = urlRequest =>
	async (dispatch) => {
		dispatch(setTasksLoad(LOAD_BEGIN));

		const res = await api.tasks.tasks(urlRequest)
		.then(data => data.data)
		console.log(res);
		dispatch(setTasksLoad(LOAD_END));
		dispatch(putTask(res));
	}


export const getTaskById = (access, id) => 
	async dispatch => {
		dispatch(setTaskInfoLoad(LOAD_BEGIN));
		const res = await api.tasks.tasksA(access, id)
		.then(data => data.data);
		dispatch(putTasInfo(res));
		dispatch(setTaskInfoLoad(LOAD_END));
	}

//! without load
export const redactMyTask = (access, id, data) =>
	async dispatch => {
		const res = api.tasks.redactMyTaskApi(access, id, data);
	}

//! without load
export const deleteMyTask = (access, id) => 
	async dispatch => {
		const res = api.tasks.deleteMyTaskApi(access, id);
	}

	//! without load

//? rederect in this place

export const sendApplication = (access, id, message) => 
	async dispatch => {

			dispatch(setSendApplicationLoad(LOAD_BEGIN));

			const res = api.applications.sendApplicationApi(id, {message}, access)
			.then(() => {
				dispatch(setSendApplicationLoad(LOAD_END));
			})
			.catch(error => {
				const {error_code} = error.response.data;
				dispatch(setSendApplicationLoad(LOAD_ERROR(error_code)));
			});
	}

export const getMyTasks = (access, user, url) =>
	async (dispatch) => {
		dispatch(setMyTasksLoad(LOAD_BEGIN));

		const res = await api.user.getMyTasksAPI(access, user, url)
		.then(data => data.data)

		dispatch(setMyTasksLoad(LOAD_END));
		dispatch(setMyTasks(res));
	}

export const getTODOtasks = (access, user, url) => {
	console.log("todo call body");
	return async (dispatch) => {
		console.log("todo call async start");
		dispatch(setTodoTasksLoad(LOAD_BEGIN));
		const res = await api.user.getTODOtasksAPI(access, user, url)
		.then(data => data.data);
		console.log("todo call async end");
		dispatch(setTodoTasksLoad(LOAD_END));
		dispatch(setTODOtasks(res));
	}
}

export const setInformational_endpoint = () =>
	async (dispatch) => {
		dispatch(setInformationalEndpointLoad(LOAD_BEGIN));
		const res = await api.informational_endpoint.informational_endpoint()
			.then(data => data.data);
		dispatch(setInformationalEndpointLoad(LOAD_END));

		dispatch(setProfile_choices_info(res.profile_choices_info));
		dispatch(setFilters_info(res.task_filters_info));
		dispatch(setSubjects_info(res.subjects_info));
		dispatch(setTags_info(res.tags_info));
	}


export const setNotifications = access => 
	async dispatch => {

		dispatch(setNotificationsLoad(LOAD_BEGIN));

		const res = await api.notifications.notifications(access)
			.then(data => data.data);
		
		dispatch(setNotificationsLoad(LOAD_END));
		dispatch(putNotifications(res));
		// console.log("notificationsDateDateDate: ", res, new Date());
	}



export const setTaskForRedact = task =>
	dispatch => {
		dispatch(putTaskForRedact(task));
	}

export const setMyApplications = (id, access) => 
	async dispatch => {
		dispatch(setApplicationsLoad(LOAD_BEGIN));
		const res = await api.applications.myApplications(id, access)
		.then(data => data.data);
		dispatch(setApplicationsLoad(LOAD_END));
		dispatch(putMyApplications(res));
	}

export const setChooseApplicationsInformation = (access, id) => 
	async dispatch => {
		dispatch(setApplicationsLoad(LOAD_BEGIN));
		const res = await api.tasks.taskApplicationsInfo(access, id)
		.then(res => res.data.applications);
		dispatch(setApplicationsLoad(LOAD_END));
		dispatch(putChooseApplicationsInformation(res));
	}
//! without load
export const setDoerStorage = (acces, id, username) => 
	async dispatch => {
		const res = await api.tasks.setImplementor(acces, id, username);
	}

//! without load
export const redactMyApplication = (taskId, access, message) =>
	async dispatch => {
		const res = await api.applications.redactMyApplicationApi(taskId, access, {message})
		.then(data => data.data);
	}
//! without load
export const deleteMyApplication = (taskId, access) =>
	async dispatch => {
		const res = await api.applications.deleteMyApplicationApi(taskId, access)
		.then(data => data.data);
	}

export const getUsers = access => 
	async dispatch => {
		dispatch(setUsersLoad(LOAD_BEGIN));
		const res = await api.users.getUsersApi(access)
		.then(data => data.data);
		dispatch(setUsersLoad(LOAD_END));
		dispatch(setUsers(res));
	}