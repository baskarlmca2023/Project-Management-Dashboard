import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },
      prepare: (project) => {
        return {
          payload: {
            id: nanoid(),
            ...project,
          },
        };
      },
    },

    deleteProject: (state, action) => {
      state.list = state.list.filter((project) => project.id !== action.payload);
    },
  },
});

export const { addProject, deleteProject } = projectSlice.actions;
export default projectSlice.reducer;
