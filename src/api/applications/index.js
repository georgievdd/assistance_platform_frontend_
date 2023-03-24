import EndPoints from "../endPoints";
import { axiosAccessRequest, axiosInstance } from "../instance";

export const myApplications = (id, access) =>
	axiosAccessRequest("get", EndPoints.USERS + id + EndPoints.MY_APPLICATIONS, access);

export const redactMyApplicationApi = (taskId, access, data) => 
	axiosAccessRequest("put", EndPoints.TASKS + taskId + EndPoints.MY_APPLICATION, access, data);

export const deleteMyApplicationApi = (taskId, access) => 
	axiosAccessRequest("delete", EndPoints.TASKS + taskId + EndPoints.MY_APPLICATION, access);

export const sendApplicationApi = (id, data, access) => 
	axiosInstance("put", EndPoints.TASKS + id + EndPoints.APPLY, access, data);