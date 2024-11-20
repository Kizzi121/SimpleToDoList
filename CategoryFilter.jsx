import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryFilter() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        margin: '1rem auto',
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#ffffff',
          backgroundColor: '#007bff',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        All
      </Link>
      <Link
        to="/category/Work"
        style={{
          textDecoration: 'none',
          color: '#ffffff',
          backgroundColor: '#007bff',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Work
      </Link>
      <Link
        to="/category/Personal"
        style={{
          textDecoration: 'none',
          color: '#ffffff',
          backgroundColor: '#007bff',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Personal
      </Link>
      <Link
        to="/category/Urgent"
        style={{
          textDecoration: 'none',
          color: '#ffffff',
          backgroundColor: '#007bff',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Urgent
      </Link>
    </div>
  );
}
