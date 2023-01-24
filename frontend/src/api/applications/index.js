import EndPoints from "../endPoints";
import { axiosAccessRequest, axiosInstance } from "../instance";

export const myApplications = (id, access) =>
	axiosAccessRequest("get", EndPoints.USERS + id + EndPoints.MY_APPLICATIONS, access);