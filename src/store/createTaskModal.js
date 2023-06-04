import { createSlice } from '@reduxjs/toolkit';

const initialCreateTaskModal = false;

const createTaskModal = createSlice({
  name: 'createTaskModal',
  initialState: initialCreateTaskModal,
  reducers: {
    updateCreateTaskModal: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { updateCreateTaskModal } = createTaskModal.actions;
export default createTaskModal.reducer;
