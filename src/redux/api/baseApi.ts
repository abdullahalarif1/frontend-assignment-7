import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://l2b2-assignment-7.vercel.app/api",
  }),
  tagTypes: ["clothe"],
  endpoints: () => ({}),
});

// baseUrl:
//       "https://l2-b2-frontend-path-assignment-6-server-starter-pack-seven.vercel.app/api",
