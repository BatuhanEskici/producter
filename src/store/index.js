import { configureStore } from '@reduxjs/toolkit';
import tasks from './tasks';
import columns from './columns';
import createTaskModal from './createTaskModal';

const store = configureStore({
  reducer: { tasks, columns, createTaskModal },
});

export default store;
