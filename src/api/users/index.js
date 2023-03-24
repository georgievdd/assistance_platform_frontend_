import EndPoints from "../endPoints";
import { axiosAccessRequest, axiosInstance } from "../instance";

export const getUsersApi = access => 
  axiosAccessRequest("get", EndPoints.USERS, access);