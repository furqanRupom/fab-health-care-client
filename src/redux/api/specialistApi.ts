import { tagTypes, typeList } from "../tag-types";
import { baseApi } from "./baseApi";

const specialistApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createSpecialist: build.mutation({
            query: (data) => ({
                url: "/speclites/create-spcelites",
                method: "POST",
                contentType:"multipart/form-data",
                data
            })
        }),
        getAllSpecialist: build.query({
            query: () => ({
                url: "/speclites",
                method: "GET",
            }),
            providesTags:[tagTypes.specialities]
        }),
        deleteSpecialist:build.mutation({
             query:(id) => {
                return {
                    url: `/speclites/${id}`,
                    method: "DELETE"
                }
             },
             invalidatesTags:[tagTypes.specialities]
        })
    })
})

export const {useCreateSpecialistMutation,useGetAllSpecialistQuery, useDeleteSpecialistMutation} = specialistApi;