import EndPoints from "../endPoints";
import { axiosInstance } from "../instance";

export const tasks = urlParams => {
	if (!urlParams) urlParams = '';
	console.log("api.tasks -> url: ", EndPoints.TASKS + urlParams); 
	return axiosInstance.get(EndPoints.TASKS + urlParams);
}


export const postTask = (access, params) => {
	axiosInstance.post(EndPoints.NEW_TASK, {
		headers: new Headers({
			'Authorization': 'Bearer ' + access,
			'Content-Type': 'application/json'
		}),
		params
	});
}