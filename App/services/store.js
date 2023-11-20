import {configureStore} from '@reduxjs/toolkit';
import pdfSlice from './slices/pdfSlice';
export default store = configureStore({reducer: {pdfSlice}});
