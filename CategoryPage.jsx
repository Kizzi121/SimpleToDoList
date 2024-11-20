import React from 'react';
import { useParams } from 'react-router-dom';
import TaskList from '../Components/TaskList';
import CategoryFilter from '../Components/CategoryFilter';

export default function CategoryPage() {
  const { category } = useParams();

  return (
    <div>
      <h1>{category} Tasks</h1>
      <CategoryFilter />
      <TaskList categoryFilter={category} />
    </div>
  );
}
