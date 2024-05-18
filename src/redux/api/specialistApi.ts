import { baseApi } from "./baseApi";

const specialistApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createSecialist: build.mutation({
            query: (data) => ({
                url: "/speclites/create-spcelites",
                method: "POST",
                contentType:"multipart/form-data",
                data: data
            })
        })
    })
})