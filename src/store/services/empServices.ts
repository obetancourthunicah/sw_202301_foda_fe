import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../store';
const {VITE_APP_API_BASE_URL, VITE_APP_API_KEY} = import.meta.env;
export const empApi = createApi({
  reducerPath: 'empApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_API_BASE_URL}/empresas`,
    prepareHeaders: (headers, { getState })=>{
      const token = (getState() as RootState).sec.token;
      headers.set('apikey', VITE_APP_API_KEY||'');
      headers.set('Authorization', `Bearer ${token}` )
    }
  }),
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => ({
        url: 'getAll'
      })
    })
  })
});

export const {useGetAllQuery} = empApi;
