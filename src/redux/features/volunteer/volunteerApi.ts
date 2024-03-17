import { baseApi } from "@/redux/api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVolunteer: builder.query({
      query: () => ({
        url: "/volunteer",
        method: "GET",
      }),
      providesTags: ["clothe"],
    }),
    addVolunteer: builder.mutation({
      query: (data) => ({
        url: "/volunteer",
        method: "POST",
        body: data, // must be object will be send
      }),
      invalidatesTags: ["clothe"],
    }),
  }),
});

export const { useAddVolunteerMutation, useGetVolunteerQuery } = volunteerApi;
