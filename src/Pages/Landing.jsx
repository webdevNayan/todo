// src/components/Landing.js
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import TaskList from '../Components/TaskList';
import TaskInput from '../Components/TaskInput';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, toggleTask } from '../Redux/taskSlice';

const Landing = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  // Function to add a new task
  const handleAdd = (taskText) => {
    dispatch(addTask(taskText));
  };

  // Function to delete a task
  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  // Function to toggle the completion state of a task
  const handleToggle = (index) => {
    dispatch(toggleTask(index));
  };

  // Load tasks from local storage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      dispatch({ type: 'tasks/load', payload: savedTasks });
    }
  }, [dispatch]);

  // Save tasks to local storage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Container>
      {/* Page title */}
      <h2 className="text-center mt-5 mb-2 text-primary">Todo App</h2>
      {/* Task input component */}
      <TaskInput onAdd={handleAdd} />
      {/* Task list component */}
      <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
    </Container>
  );
};

export default Landing;
