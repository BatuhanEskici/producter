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
  },
});

export const { updateTasks } = tasks.actions;
export default tasks.reducer;
