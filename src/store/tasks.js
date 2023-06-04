import { createSlice } from '@reduxjs/toolkit';

const initialTasksState = [];

const tasks = createSlice({
  name: 'tasks',
  initialState: initialTasksState,
  reducers: {
    updateTasks: (state, action) => {
      state = action.payload;
      return state;
    },
    createTask: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { updateTasks, createTask } = tasks.actions;
export default tasks.reducer;
