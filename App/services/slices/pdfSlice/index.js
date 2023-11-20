import {createSlice} from '@reduxjs/toolkit';

const pdfSlice = createSlice({
  name: 'pdf',
  initialState: {
    pageNumber: '1',
  },
  reducers: {
    updatePageNumber: (state, payload) => {
      state.pageNumber = payload.pageNumber;
    },
  },
});

export const {updatePageNumber} = pdfSlice.actions;

export default pdfSlice.reducers;
