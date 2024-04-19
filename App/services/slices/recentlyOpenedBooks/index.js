import {createSlice} from '@reduxjs/toolkit';

const recentlyOpenedBooks = createSlice({
  name: 'openedBooks',
  initialState: {
    openedBooks: [],
  },
  reducers: {
    addToOpenedBooksList: (state, action) => {
      const bookExists = state.openedBooks.find(
        bookURL => bookURL === action.payload,
      );
      if (!bookExists)
        state.openedBooks = [...state.openedBooks, action.payload];
    },
  },
});
export const getRecentlyOpenedBooks = state =>
  state.recentlyOpenedBooks.openedBooks;

export const {addToOpenedBooksList} = recentlyOpenedBooks.actions;
export default recentlyOpenedBooks.reducer;
