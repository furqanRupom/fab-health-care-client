import { authKey } from "@/constants/authKey";
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