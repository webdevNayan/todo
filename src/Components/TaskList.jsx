// src/components/TaskList.js
import React from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <ListGroup style={{ marginTop: '20px' }}>
      {/* Map through tasks array to render each task */}
      {tasks.map((task, index) => (
        <ListGroup.Item
          key={index}
          // Apply dynamic class based on task completion
          className={`d-flex justify-content-between align-items-center ${task.completed ? 'bg-success text-white' : 'bg-danger text-white'}`}
          style={{ margin: '10px', padding: '10px' }}
        >
          <div>
            {/* Checkbox to toggle task completion */}
            <Form.Check
              type="checkbox"
              label={task.text}
              checked={task.completed}
              onChange={() => onToggle(index)}
              className="me-3"
            />
            {/* Display task text with line-through if completed */}
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
          </div>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            {/* Display task state */}
            <span className="me-3">State:</span>
            <span>{task.completed ? 'Completed' : 'Pending'}</span>
            {/* Button to delete task */}
            <Button variant="outline-warning" onClick={() => onDelete(index)} className="ms-sm-3 mt-3 mt-sm-0">
              Delete
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;
