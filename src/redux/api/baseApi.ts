import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { typeList } from "../tag-types";

export const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery:axiosBaseQuery({
        baseUrl:"http://localhost:5000/api/v1"
    }),
    endpoints:()=> ({}),
    tagTypes:typeList
})