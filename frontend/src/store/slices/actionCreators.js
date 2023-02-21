import api from '../../api';
import { setUser, setUserInfo } from './userSlice';
import { getTasks, putTask } from './tasksSlice';
import { setMyTasks } from './myTasksSlice';
import { setProfile_choices_info, setFilters_info, setSubjects_info, setTags_info } from './informational_endpointSlice';
import { setTODOtasks } from './todoTasksSlice';
import { putNotifications } from './notificationsSlice';
import { putTaskInfo } from './taskInfoSlice';
import { putMyApplications } from './applicationSlice';
import { write } from '../../datafunc';

export const loginUser = data =>
	async (dispatch) => {
		const res = await api.auth.login(data);
		//console.log(res.data);
		dispatch(setUser(res.data));
	}

export const getUserData = data => {
	
	console.log("getUserData: ", data);

	return async (dispatch) => {
		const res = await api.user.userInfo(data);
		console.log("user: ", res.data);

		dispatch(setUserInfo(res.data));

	}
}
export const registrationUser = data => 
	async (dispatch) => {
		const res = await api.auth.registration(data)
		.then(data => data.data);

		dispatch(loginUser({username: data.username, password: data.password}));
		dispatch(getUserData( data.username));

	}

export const setTasks = urlRequest =>
	async (dispatch) => {

		console.log("setTasks->data: ", urlRequest);

		const res = await api.tasks.tasks(urlRequest)
		.then(data => data.data)
		dispatch(getTasks(res));
	}

	export const setTask = urlRequest =>
	async (dispatch) => {
		const res = await api.tasks.tasks(urlRequest)
		.then(data => data.data)
		console.log(res);
		dispatch(putTask(res));
	}



export const getMyTasks = (user, url) =>
	async (dispatch) => {

		const res = await api.user.getMyTasksAPI(user, url)
		.then(data => data.data)
		dispatch(setMyTasks(res));
	}

export const getTODOtasks = (user, url) =>
	async (dispatch) => {

		const res = await api.user.getTODOtasksAPI(user, url)
		.then(data => data.data);
		console.log("todo", res, url);
		dispatch(setTODOtasks(res));
	}

export const setInformational_endpoint = () =>
	async (dispatch) => {
		const res = await api.informational_endpoint.informational_endpoint()
			.then(data => data.data);
		dispatch(setProfile_choices_info(res.profile_choices_info));
		dispatch(setFilters_info(res.task_filters_info));
		dispatch(setSubjects_info(res.subjects_info));
		dispatch(setTags_info(res.tags_info));
	}


export const setNotifications = acces => 
	async dispatch => {
		const res = await api.notifications.notifications(acces)
			.then(data => data.data);
		dispatch(putNotifications(res));
		console.log("res: ", res);
	}


export const setTaskInfo = info =>
	dispatch => {
		dispatch(putTaskInfo(info));
	}

export const setMyApplications = (id, access) => 
	async dispatch => {
		const res = await api.applications.myApplications(id, access)
		.then(data => data.data);
		write({setMyApplications: res})
		dispatch(putMyApplications(res));
	}