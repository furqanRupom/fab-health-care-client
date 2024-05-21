import { authKey } from "@/constants/authKey";
import { instance as axiosInstance } from "@/helpers/axios/axiosinstance";
import { decodeToken } from "@/utils/jwtDecode";
import { getLocalStorage, removeFromLocalStorage, setLocalStorage } from "@/utils/localStorage";

export const storeUserInfo = (accessToken: string) => {
  return setLocalStorage(authKey, accessToken)
};

export const getUserInfo = () => {
  const authToken = getLocalStorage(authKey);
  if (authToken) {
    const decodedData:any = decodeToken(authToken);
    return {
      ...decodedData,
      role:decodedData.role.toLowerCase()
    }
  }
};


export const isLoggedIn = () => {
  const authToken = getLocalStorage(authKey);
  if(authToken){
    return !!authToken;
  }
}

export const loggedOut = () => {
  const removeToken =  removeFromLocalStorage(authKey);
  return removeToken;
}

export const getNewAccessToken = async () => {
   const result =  await axiosInstance({
    url:"http://localhost:5000/api/v1/auth/refresh-token",
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    withCredentials:true
  })


  return result;
}