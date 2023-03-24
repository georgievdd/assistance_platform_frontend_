import EndPoints from "../endPoints";
import { axiosAccessRequest, axiosInstance } from "../instance";

export const redactProfile = (username, access, data) =>
	axiosAccessRequest("put", EndPoints.USERS + username, access, data);