import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  tasks: [],
};

// Reducer function
function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => (task.id === action.payload.id ? action.payload : task)),
      };
    default:
      return state;
  }
}

// Create Context
export const TaskContext = createContext();

// Context Provider
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
