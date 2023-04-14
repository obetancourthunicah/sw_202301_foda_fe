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
  tagTypes: ["Empresas"],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => ({
        url: 'all'
      }),
      providesTags: ["Empresas"]
    }),
    getById: builder.query({
      query: (id) => ({
        url: `byid/${id}`
      }),
      providesTags: ["Empresas"]
    }),
    addNew: builder.mutation({
      query: (emp:{codigo:string, nombre:string, status:string}) => (
        {
          url: 'new',
          method: 'POST',
          body: emp
        }),
      invalidatesTags: ["Empresas"]
    })
  })
});

export const {useGetAllQuery, useGetByIdQuery, useAddNewMutation} = empApi;
