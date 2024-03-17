import { baseApi } from "@/redux/api/baseApi";

const donorsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDonors: builder.query({
      query: () => ({
        url: "/donors",
        method: "GET",
      }),
      providesTags: ["clothe"],
    }),
    addTestimonial: builder.mutation({
      query: (data) => ({
        url: "/donors",
        method: "POST",
        body: data, // must be object will be send
      }),
      invalidatesTags: ["clothe"],
    }),
  }),
});

export const { useGetDonorsQuery, useAddTestimonialMutation } = donorsApi;
