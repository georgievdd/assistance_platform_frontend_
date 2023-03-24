import axios from "axios";

// require('dotenv').config();


const HOST = "http://127.0.0.1:8000";
const VARIANT = '/api/v1';



// console.log("process", process.env);

export const axiosInstance = axios.create({
	baseURL: HOST + VARIANT,
});


export const axiosAccessRequest = (method, path, access, data) => {
	axios.interceptors.request.use(
		config => {
			config.headers.Authorization = "Bearer " + access;
			return config;
		});

	return axios({
		method,
		url: HOST + VARIANT + path, 
		data
	});
}