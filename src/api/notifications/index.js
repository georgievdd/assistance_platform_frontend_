import EndPoints from "../endPoints";
import { axiosAccessRequest, HOST, VARIANT } from '../instance';
import axios from "axios";

export const notifications = access => 
  axiosAccessRequest("get", EndPoints.NOTIFICATIONS, access);


export const notificationsClear = access =>
  axiosAccessRequest("put", EndPoints.NOTIFICATIONS, access);
