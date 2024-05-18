"use server";
import { ILoginData } from "@/components/UI/LoginPage/LoginForm";
import { storeUserInfo } from "../auth.services";
import { FieldValues } from "react-hook-form";

export const userLogin = async (data : FieldValues) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data),
    });
    const accessResponse = await response.json();
    
    //  if(!accessResponse.data.accessToken){
    //      console.log({ accessToken: accessResponse.data.accessToken });
    //      return null;
    //  };
   
    // storeUserInfo(accessResponse?.data?.accessToken);
    return accessResponse;
}