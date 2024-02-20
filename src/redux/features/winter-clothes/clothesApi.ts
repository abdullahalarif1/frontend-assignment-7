import { baseApi } from "@/redux/api/baseApi";

const clothesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClothes: builder.query({
      query: () => ({
        url: "/winter-clothes",
        method: "GET",
      }),
      providesTags: ["clothe"],
    }),
    getSingleClothes: builder.query({
      query: (data) => ({
        url: `/winter-clothes/${data._id}`,
        method: "GET",
      }),
    }),
    addClothe: builder.mutation({
      query: (data) => ({
        url: "/winter-clothes",
        method: "POST",
        body: data, // must be object will be send
      }),
      invalidatesTags: ["clothe"],
    }),
    deleteClothes: builder.mutation({
      query: (id) => ({
        url: `/winter-clothes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["clothe"],
    }),
    updateClothes: builder.mutation({
      query: ({ id, data }) => ({
        url: `/winter-clothes/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["clothe"],
    }),
  }),
});

export const {
  useGetClothesQuery,
  useGetSingleClothesQuery,
  useDeleteClothesMutation,
  useAddClotheMutation,
  useUpdateClothesMutation
} = clothesApi;
