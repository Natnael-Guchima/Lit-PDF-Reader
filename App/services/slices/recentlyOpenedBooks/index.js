import {createSlice} from '@reduxjs/toolkit';

const recentlyOpenedBooks = createSlice({
  name: 'openedBooks',
  initialState: {
    openedBooks: [],
  },
  reducers: {
    addToOpenedBooksList: (state, action) => {
      console.log(action, 'from reducer', state);
      state.openedBooks = [...state.openedBooks, action.payload];
    },
  },
});
export const getRecentlyOpenedBooks = state =>
  state.recentlyOpenedBooks.openedBooks;
export const {addToOpenedBooksList} = recentlyOpenedBooks.actions;
export default recentlyOpenedBooks.reducer;
