import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: nanoid(),
        status: 'To Do',
        ...action.payload,
      });
    },
    updateTaskStatus: (state, action) => {
      const task = state.list.find(t => t.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
      }
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTaskStatus, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
