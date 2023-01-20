import EndPoints from "../endPoints";
import { axiosInstance } from "../instance";

export const login = (params) =>
	axiosInstance.post(EndPoints.AUTH.TOKEN, params);

export const registration = (params) => 
	axiosInstance.post(EndPoints.REGISTRATIONS, params);