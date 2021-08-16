import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// TODO: указать baseUrl
const baseUrl = '';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: () => ({}),
});
