
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employees/employeeSlice';
import projectReducer from '../features/projects/projectSlice';
import taskReducer from '../features/tasks/taskSlice';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    projects: projectReducer,
    tasks: taskReducer,
  },
});

export default store;
