import { baseApi } from "@/redux/api/baseApi";

const clothesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClothes: builder.query({
      query: () => ({
        url: "/winter-clothes",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetClothesQuery } = clothesApi;
