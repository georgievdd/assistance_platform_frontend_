import EndPoints from "../endPoints";
import { axiosInstance } from "../instance";

export const userInfo = params =>
	axiosInstance.get(EndPoints.USERS + params);

export const setProfile = params => {
	console.log(EndPoints.USERS + params.username);
	return axiosInstance.put(EndPoints.USERS + params.username, params.data);
}

export const getMyTasksAPI = (user, urlParams) => {
	return axiosInstance.get(EndPoints.USERS + user + '/tasks' + urlParams);
}

export const getTODOtasksAPI = (user, urlParams) => {
	return axiosInstance.get(EndPoints.USERS + user + '/todo_tasks' + urlParams);
}