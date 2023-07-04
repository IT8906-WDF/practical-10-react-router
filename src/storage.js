// storage.js
import { configureStore } from '@reduxjs/toolkit';
import recordReducer from './recordSlice';

export default configureStore({
    reducer: {
        // Register reducers here
        record: recordReducer,
    },
});
