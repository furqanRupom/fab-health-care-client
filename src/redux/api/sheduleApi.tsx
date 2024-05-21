import { IMetaData } from "@/types";
import { tagTypes, typeList } from "../tag-types";
import { baseApi } from "./baseApi";

const scheduleApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createSchedule: build.mutation({
            query: (data) => {
                return {
                    url: "/schedule",
                    method: "POST",
                    contentType: "application/json",
                    data
                }
            }
        }),
        getAllSchedule: build.query({
            query: (args: Record<string, any>) => {
                console.log(args);
                return {
                    url: "/schedule",
                    method: "GET",
                    params: args
                }
            },
            transformResponse: (response: any, meta: IMetaData) => {
                return {
                    schedules: response,
                    meta
                }
            },
            providesTags: [tagTypes.doctor]
        }),
   
    })
})

export const { useCreateScheduleMutation,useGetAllScheduleQuery} = scheduleApi;