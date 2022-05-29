import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from '../slices/banner.slice';
import inputReducer from '../slices/input.slice';
import counterReducer from '../slices/counter.slice';

export const store = configureStore({
  reducer: {
    banner : bannerReducer,
    input : inputReducer,
    counter : counterReducer,
  },
});
