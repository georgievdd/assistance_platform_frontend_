import EndPoints from "../endPoints";
import { axiosAccessRequest, axiosInstance } from "../instance";

export const userInfo = (params) =>
	axiosInstance.get(EndPoints.USERS + params);
	// axiosAccessRequest("get", EndPoints.USERS + params, access);

export const userInfoA = (access, params) =>
	axiosAccessRequest("get", EndPoints.USERS + params, access);

export const editProfileApi = (access, id, data) => 
	axiosAccessRequest("put", EndPoints.USERS + id + EndPoints.EDIT_PROFILE, access, data);

export const editContactsApi = (access, id, data) => 
	axiosAccessRequest("put", EndPoints.USERS + id + EndPoints.EDIT_CONTACTS, access, data);

export const setProfile = (access, params) =>
	axiosAccessRequest("get", EndPoints.USERS + params.username, access, params.data);

export const getMyTasksAPI = (access, user, urlParams) =>
	// axiosInstance.get(EndPoints.USERS + user + '/tasks' + urlParams);
	axiosAccessRequest("get", EndPoints.USERS + user + '/tasks' + urlParams, access);


export const getTODOtasksAPI = (access, user, urlParams) =>
	axiosAccessRequest("get", EndPoints.USERS + user + '/todo_tasks' + urlParams, access);