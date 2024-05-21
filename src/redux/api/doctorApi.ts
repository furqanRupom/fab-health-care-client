import { IDoctor } from "@/app/(withDashboardLayout)/dashboard/admin/doctors/DoctorsModal";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { IMetaData } from "@/types";

const doctorApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createDoctor: build.mutation({
            query: (data) => {
                return {
                    url: "/user/create-doctor",
                    method: "POST",
                    data
                }
            },

        }),
        getAllDoctor: build.query({
            query: (args: Record<string, any>) => {
                 console.log(args);
                return {
                    url: "/doctor",
                    method: "GET",
                    params: args
                }
            },
            transformResponse: (response: IDoctor[], meta: IMetaData) => {
                return {
                    doctors: response,
                    meta
                }
            },
            providesTags: [tagTypes.doctor]
        }),
        deleteDoctor: build.mutation({
            query: (id: string) => {
                return {
                    url: `/doctor/${id}`,
                    method: "DELETE"
                }
            },
            invalidatesTags: [tagTypes.doctor]
        }),
        singleGetDoctor: build.query({
            query: (id: string) => {
                return {
                    url: `/doctor/${id}`,
                    method: "GET"
                }
            }
        }),
        updateDoctor: build.mutation({
            query: (args) => ({
                url: `/doctor/${args.id}`,
                method: "PATCH",
                data: args.data
            })
        })
    })
})
export const { useCreateDoctorMutation,useGetAllDoctorQuery,useSingleGetDoctorQuery,useUpdateDoctorMutation,useDeleteDoctorMutation } = doctorApi;