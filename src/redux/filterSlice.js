import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
   
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});


// Action creators are generated for each case reducer function
export const { filterContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;