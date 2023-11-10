import { configureStore } from '@reduxjs/toolkit';
import projects from '../components/ExpirienceObtainedAfterJS/projectList/projectSlice';
import filters from '../components/ExpirienceObtainedAfterJS/courseFilters/CourseFilterSlice';

const store = configureStore({
  reducer: { projects, filters },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
