import EndPoints from "../endPoints";
import { axiosInstance, axiosAccessRequest } from "../instance";

export const tasks = urlParams => {
	if (!urlParams) urlParams = '';
	// console.log("api.tasks -> url: ", EndPoints.TASKS + urlParams); 
	return axiosInstance.get(EndPoints.TASKS + urlParams);
}


export const postTask = (access, data) =>
	axiosAccessRequest("post", EndPoints.NEW_TASK, access, data);