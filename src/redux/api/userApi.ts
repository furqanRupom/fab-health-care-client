import { baseApi } from "./baseApi";


export const userApi  = baseApi.injectEndpoints({
    endpoints:(build) => ({
        getMyProfile:build.query({
            query:()=>({
                url:"/user/me",
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
        })
        })
    })
})


export const {useGetMyProfileQuery} = userApi