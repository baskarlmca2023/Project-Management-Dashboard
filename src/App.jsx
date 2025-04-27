import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './auth/authSlice';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import AdminLogin from './auth/AdminLogin';

export default function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Project Dashboard</h1>
        {isAuthenticated && (
          <nav style={navStyle}>
            <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
            <Link to="/employees" style={linkStyle}>Employees</Link>
            <Link to="/projects" style={linkStyle}>Projects</Link>
            <Link to="/tasks" style={linkStyle}>Tasks</Link>
            <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
          </nav>
        )}
      </header>

      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/employees" element={isAuthenticated ? <Employees /> : <Navigate to="/" />} />
          <Route path="/projects" element={isAuthenticated ? <Projects /> : <Navigate to="/" />} />
          <Route path="/tasks" element={isAuthenticated ? <Tasks /> : <Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

// Styles
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
  alignItems: 'center',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '1rem',
  padding: '0.3rem 0.5rem',
  transition: 'color 0.3s ease',
};

const logoutButtonStyle = {
  backgroundColor: 'transparent',
  border: '1px solid white',
  color: 'white',
  padding: '0.3rem 0.7rem',
  fontSize: '1rem',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
};
