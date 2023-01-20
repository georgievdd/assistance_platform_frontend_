import EndPoints from "../endPoints";
import { axiosInstance } from "../instance";

export const redactProfile = (username, access, params) =>
	axiosInstance.put(EndPoints.USERS + username, {
		headers: new Headers({
			'Authorization': 'Bearer ' + access,
			'Content-Type': 'application/json'
		}),
		params
	});