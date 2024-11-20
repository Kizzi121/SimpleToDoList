import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function TaskList({ categoryFilter }) {
  const { state, dispatch } = useContext(TaskContext);

  const filteredTasks = categoryFilter
    ? state.tasks.filter((task) => task.category === categoryFilter)
    : state.tasks;

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <ul
      style={{
        listStyleType: 'none',
        padding: '0',
        margin: '2rem auto',
        maxWidth: '600px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
      }}
    >
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            borderBottom: '1px solid #eee',
            transition: 'all 0.3s ease',
          }}
        >
          <span>
            {task.task} -{' '}
            <strong
              style={{
                color: '#007bff',
              }}
            >
              {task.category}
            </strong>
          </span>
          <button
            onClick={() => handleDelete(task.id)}
            style={{
              backgroundColor: '#dc3545',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
