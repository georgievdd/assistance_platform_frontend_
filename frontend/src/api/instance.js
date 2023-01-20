import axios from "axios";

export const HOST = "http://127.0.0.1:8000";
export const VARIANT = '/api/v1';

export const axiosInstance = axios.create({
	baseURL: HOST + VARIANT,
});