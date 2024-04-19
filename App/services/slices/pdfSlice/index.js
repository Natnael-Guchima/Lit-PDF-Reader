import {createSlice} from '@reduxjs/toolkit';

const pdfSlice = createSlice({
  name: 'pdf',
  initialState: {
    pageNumber: '1',
    tableOfContent: [],
  },
  reducers: {
    updatePageNumber: (state, {payload: pageNumber}) => {
      state.pageNumber = pageNumber;
    },
    updateTableOfContent: (state, action) => {
      state.tableOfContent = action.payload;
    },
  },
});

export const getPageNumber = state => state.pdfSlice.pageNumber;
export const getTableOfContent = state => state.pdfSlice.tableOfContent;

export const {updatePageNumber, updateTableOfContent} = pdfSlice.actions;

export default pdfSlice.reducer;
