import EndPoints from "../endPoints";
import { HOST, VARIANT } from '../instance';
import axios from "axios";

export const notifications = access => {
    const path = HOST + VARIANT + EndPoints.NOTIFICATIONS;

    axios.interceptors.request.use(
      config => {
        config.headers.Authorization = "Bearer " + access;
        return config;
      });

    return axios({ method: "get", url: path });
  }


export const notificationsClear = access => {
    const path = HOST + VARIANT + EndPoints.NOTIFICATIONS;

    axios.interceptors.request.use(
      config => {
        config.headers.Authorization = "Bearer " + access;
        return config;
      });

    return axios({ method: "put", url: path });
  }