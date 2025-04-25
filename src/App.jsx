import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';

export default function App() {
  return (
    <>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Project Dashboard</h1>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Dashboard</Link>
          <Link to="/employees" style={linkStyle}>Employees</Link>
          <Link to="/projects" style={linkStyle}>Projects</Link>
          <Link to="/tasks" style={linkStyle}>Tasks</Link>
        </nav>
      </header>

      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </main>
    </>
  );
}

const headerStyle = {
  backgroundColor: '#1976d2',
  color: 'white',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  fontSize: '1.6rem',
  fontWeight: '600',
  margin: 0,
};

const navStyle = {
  display: 'flex',
  gap: '1.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '1rem',
  padding: '0.3rem 0.5rem',
  transition: 'color 0.3s ease',
};

