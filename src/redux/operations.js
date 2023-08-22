import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './contactSlice';


axios.defaults.baseURL =
  'https://64dcb288e64a8525a0f6f8cb.mockapi.io/api/contacts/';
//   axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }  
  }
);


export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (text, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', {text});
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }  
  }
);

export const deleteContacts = createAsyncThunk('contacts/deleteContact',
async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})






// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchAll',
//     async dispatch => {
//       try {
//         dispatch(fetchingInProgress());
//         const response = await axios.get('/contacts');
//         dispatch(fetchingSuccess(response.data));
//       } catch (error) {
//         dispatch(fetchingError(error.message));
//       }
//     }
//   );