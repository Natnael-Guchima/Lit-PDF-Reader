import {createSlice} from '@reduxjs/toolkit';

const pdfSlice = createSlice({
  name: 'pdf',
  initialState: {
    pageNumber: '1',
  },
  reducers: {
    updatePageNumber: (state, {payload: pageNumber}) => {
      state.pageNumber = pageNumber;
    },
  },
});

export const getPageNumber = state => state.pdfSlice.pageNumber;

export const {updatePageNumber} = pdfSlice.actions;

export default pdfSlice.reducer;
