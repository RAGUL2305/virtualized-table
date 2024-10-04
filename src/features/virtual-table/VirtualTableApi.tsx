import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface GetAllDataResponse {
  id: number;
  name: string;
  email: string;
  country: string;
}

const virtualTableAPI = createApi({
  reducerPath: "mockdata",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66e14386c831c8811b54437e.mockapi.io",
  }),
  endpoints: (builder) => ({
    getAllData: builder.query<GetAllDataResponse[], void>({
      query: () => `/data`,
    }),
  }),
});
export default virtualTableAPI;
export const { useGetAllDataQuery } = virtualTableAPI;
