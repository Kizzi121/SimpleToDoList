import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CategoryPage from './Pages/CategoryPage';
import { TaskProvider } from './Context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
