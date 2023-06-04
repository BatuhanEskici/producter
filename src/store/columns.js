import { createSlice } from '@reduxjs/toolkit';

const initialColumnsState = {
  'column-1': {
    name: 'To Do',
    items: [],
  },
  'column-2': {
    name: 'Done',
    items: [],
  },
};

const columns = createSlice({
  name: 'columns',
  initialState: initialColumnsState,
  reducers: {
    updateColumns: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { updateColumns } = columns.actions;
export default columns.reducer;
