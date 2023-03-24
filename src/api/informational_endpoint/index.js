import EndPoints from "../endPoints";
import { axiosInstance } from "../instance";


export const informational_endpoint = () =>
	axiosInstance.get(EndPoints.INFORMATIONAL_ENDPOINT);