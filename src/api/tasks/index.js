import EndPoints from "../endPoints";
import { axiosInstance, axiosAccessRequest } from "../instance";

export const tasks = urlParams => {
	if (!urlParams) urlParams = '';
	// console.log("api.tasks -> url: ", EndPoints.TASKS + urlParams); 
	return axiosInstance.get(EndPoints.TASKS + urlParams);
}

export const tasksA = (access, urlParams) => {
	if (!urlParams) urlParams = '';
	// console.log("api.tasks -> url: ", EndPoints.TASKS + urlParams); 
	// console.log(EndPoints.TASKS + urlParams);
	return axiosAccessRequest("get", EndPoints.TASKS + urlParams, access);
}


export const taskApplicationsInfo = (access, id) =>
	axiosAccessRequest("get", EndPoints.TASKS + id + EndPoints.SET_IMPLEMENTOR, access);

export const setImplementor = (access, id, username) => 
	axiosAccessRequest("put", EndPoints.TASKS + id + EndPoints.SET_IMPLEMENTOR, access, {
		implementer: username,
	})

export const postTask = (access, data) =>
	axiosAccessRequest("post", EndPoints.NEW_TASK, access, data);

export const redactMyTaskApi = (access, id, data) =>
	axiosAccessRequest("put", EndPoints.TASKS + id, access, data);

export const deleteMyTaskApi = (access, id) =>
	axiosAccessRequest("delete", EndPoints.TASKS + id, access);

export const closeTaskApi = (access, id, data) => 
	axiosAccessRequest("put", EndPoints.CLOSE_TASK(id), access, data);