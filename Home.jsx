import React from 'react';
import TaskForm from '../Components/TaskComponents';
import TaskList from '../Components/TaskList';
import CategoryFilter from '../Components/CategoryFilter';

export default function Home() {
  return (
    <div>
      <h1>Task Manager</h1>
      <CategoryFilter />
      <TaskForm />
      <TaskList />
    </div>
  );
}
