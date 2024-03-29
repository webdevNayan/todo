// src/components/TaskInput.js
import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const TaskInput = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task);
    setTask('');
  };

  return (
    // Center-align the input field and button
    <div className="d-flex justify-content-center">
      <InputGroup className="m-3 task_input">
        {/* Input field for entering task */}
        <FormControl
          placeholder="Enter task"
          aria-label="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {/* Button to add task */}
        <Button variant="primary" onClick={handleSubmit}>Add Task</Button>
      </InputGroup>
    </div>
  );
};

export default TaskInput;
