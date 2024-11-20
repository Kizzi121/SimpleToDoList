import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function TaskForm() {
  const { dispatch } = useContext(TaskContext);
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && category) {
      dispatch({
        type: 'ADD_TASK',
        payload: { id: Date.now(), task, category },
      });
      setTask('');
      setCategory('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        maxWidth: '450px',
        margin: '3rem auto',
        padding: '2rem',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
        border: '1px solid #e0e0e0',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#444',
          fontSize: '1.8rem',
          marginBottom: '1rem',
          fontWeight: 'bold',
        }}
      >
        Add Your Task
      </h2>
      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
        style={{
          padding: '1rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #555',
          outline: 'none',
          backgroundColor: '#000', // Black background for input
          color: '#fff', // White text for contrast
          caretColor: '#007bff', // Blue caret for visibility
          transition: 'all 0.3s ease',
        }}
        onFocus={(e) => {
          e.target.style.border = '1px solid #007bff';
          e.target.style.boxShadow = '0 0 8px rgba(0, 123, 255, 0.5)';
        }}
        onBlur={(e) => {
          e.target.style.border = '1px solid #555';
          e.target.style.boxShadow = 'none';
        }}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        style={{
          padding: '1rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #555',
          outline: 'none',
          backgroundColor: '#000', // Black background for dropdown
          color: '#fff', // White text for contrast
          transition: 'all 0.3s ease',
        }}
        onFocus={(e) => {
          e.target.style.border = '1px solid #28a745';
          e.target.style.boxShadow = '0 0 8px rgba(40, 167, 69, 0.5)';
        }}
        onBlur={(e) => {
          e.target.style.border = '1px solid #555';
          e.target.style.boxShadow = 'none';
        }}
      >
        <option value="" style={{ backgroundColor: '#000', color: '#fff' }}>
          Select Category
        </option>
        <option value="Work" style={{ backgroundColor: '#000', color: '#fff' }}>
          Work
        </option>
        <option value="Personal" style={{ backgroundColor: '#000', color: '#fff' }}>
          Personal
        </option>
        <option value="Urgent" style={{ backgroundColor: '#000', color: '#fff' }}>
          Urgent
        </option>
      </select>
      <button
        type="submit"
        style={{
          background: 'linear-gradient(135deg, #007bff, #0056b3)',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          padding: '1rem',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #0056b3, #003c82)';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #007bff, #0056b3)';
          e.target.style.transform = 'scale(1)';
        }}
      >
        Add Task
      </button>
    </form>
  );
}
