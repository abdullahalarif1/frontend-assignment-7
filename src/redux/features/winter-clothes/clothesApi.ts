import { baseApi } from "@/redux/api/baseApi";

const clothesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClothes: builder.query({
      query: () => ({
        url: "/winter-clothes",
        method: "GET",
      }),
    }),
    getSingleClothes: builder.query({
      query: (data) => ({
        url: `/winter-clothes/${data._id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetClothesQuery, useGetSingleClothesQuery } = clothesApi;
