import {configureStore} from '@reduxjs/toolkit';
import pdfSlice from './slices/pdfSlice';
import recentlyOpenedBooks from './slices/recentlyOpenedBooks';

// const middlewares = getDefaultMiddleware({
//   // https://github.com/reduxjs/redux-toolkit/issues/415
//   immutableCheck: false,
// });

// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middlewares.push(createDebugger());
// }

const middlewares = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;

  middlewares.push(createDebugger());
}

export default store = configureStore({
  reducer: {pdfSlice, openedBooks: recentlyOpenedBooks},
  middleware: getDefaultMiddleware => {
    const result = getDefaultMiddleware().concat(middlewares);

    return result;
  },
});
