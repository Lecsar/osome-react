import {baseApi} from 'store';

const simpleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getDriver: builder.query<{}, string>({
    //   query: (id) => ({url: `/driver/${id}`}),
    // }),
    // createDriver: builder.mutation<{}, {id: string}>({
    //   query: (data) => ({type: 'item', method: 'POST', url: '/driver', body: data}),
    // }),
  }),
  overrideExisting: false,
});

export const {} = simpleApi;
