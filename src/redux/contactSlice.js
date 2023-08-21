// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64dcb288e64a8525a0f6f8cb.mockapi.io/api/contacts/' }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact']
    }),
    // getContactsByFilter: builder.query({
    //   query: (name) => `/contacts/${name}`,
    //   providesTags: ['Contact']
    // }),
    addContact: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    })
  }),
})

export const { useGetContactsQuery, useGetContactsByFilterQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;


// import { createSlice } from '@reduxjs/toolkit';

// export const contactSlice = createSlice({
//   name: 'contact',
//   initialState: {
//     contacts: [],
//     filter: '',
//   },
//   reducers: {
//     addContact: (state, action) => {
//       state.contacts = [...state.contacts, action.payload];
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
//     },
//     filterContact: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { addContact, deleteContact, filterContact } =
//   contactSlice.actions;

// export default contactSlice.reducer;






// //old code
// import { createSlice } from '@reduxjs/toolkit';

// export const contactSlice = createSlice({
//   name: 'contact',
//   initialState: {
//     contacts: [],
//     filter: '',
//   },
//   reducers: {
//     addContact: (state, action) => {
//       state.contacts = [...state.contacts, action.payload];
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
//     },
//     filterContact: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { addContact, deleteContact, filterContact } =
//   contactSlice.actions;

// export default contactSlice.reducer;