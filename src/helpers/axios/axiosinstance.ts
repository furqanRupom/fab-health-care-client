import { authKey } from "@/constants/authKey";
import { IMetaData } from "@/types";
import { getLocalStorage } from "@/utils/localStorage";
import axios from "axios";
const instance = axios.create();
instance.defaults.headers.post['Content-type'] = "application/json";
instance.defaults.headers['Accept'] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const accessToken = getLocalStorage(authKey);
    if (accessToken) {
            config.headers.Authorization = accessToken;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
// @ts-ignore
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const responseObject:{data:any,meta:IMetaData} = {
        data:response?.data?.data,
        meta:response?.data?.meta
    }
    return responseObject;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const responseErrorObject = {
        statusCode:error?.response?.data?.statusCode || 500,
        message:error?.response?.data?.message || "something went wrong",
        data:error?.response?.data?.data || "something went wrong"

    }
    return responseErrorObject;
});


export {instance};