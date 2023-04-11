import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const secApi = createApi({
  reducerPath: 'secApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}/security`,
    prepareHeaders: (headers)=>{
      headers.set('apikey', process.env?.REACT_APP_API_KEY||'');
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
