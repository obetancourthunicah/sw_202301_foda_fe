import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const {VITE_APP_API_BASE_URL, VITE_APP_API_KEY} = import.meta.env;
export const secApi = createApi({
  reducerPath: 'secApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_API_BASE_URL}/security`,
    prepareHeaders: (headers)=>{
      headers.set('apikey', VITE_APP_API_KEY||'');
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'signon',
        method: 'POST',
        body: body
      })
    })
  })
});

export const {useLoginMutation} = secApi;
