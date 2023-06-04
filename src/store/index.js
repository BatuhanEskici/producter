import { configureStore } from '@reduxjs/toolkit';
import tasks from './tasks';
import columns from './columns';

const store = configureStore({
  reducer: { tasks, columns },
});

export default store;
