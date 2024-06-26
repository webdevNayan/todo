// src/Redux/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Create a slice for managing tasks
const taskSlice = createSlice({
  name: 'tasks', // Slice name
  // Initial state is obtained from local storage or an empty array if no tasks are stored
  initialState: JSON.parse(localStorage.getItem('tasks')) || [],
  reducers: {
    // Reducer function to add a new task
    addTask: (state, action) => {
      // Add the new task to the state with completed set to false
      state.push({ text: action.payload, completed: false });
      // Save updated tasks to local storage
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    // Reducer function to delete a task
    deleteTask: (state, action) => {
      // Remove the task at the specified index from the state
      state.splice(action.payload, 1);
      // Save updated tasks to local storage
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    // Reducer function to toggle the completion state of a task
    toggleTask: (state, action) => {
      // Toggle the completion state of the task at the specified index
      state[action.payload].completed = !state[action.payload].completed;
      // Save updated tasks to local storage
      localStorage.setItem('tasks', JSON.stringify(state));
    },
  },
});

// Export action creators generated by the task slice
export const { addTask, deleteTask, toggleTask } = taskSlice.actions;

// Export the reducer function generated by the task slice
export default taskSlice.reducer;
