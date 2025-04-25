import React from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const projects = useSelector((state) => state.projects?.list || []);
  const employees = useSelector((state) => state.employees?.list || []);
  const tasks = useSelector((state) => state.tasks?.list || []);

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Admin Dashboard</h1>
      <p style={{ color: '#555', marginBottom: '2rem' }}>Overview of your project management system</p>

      {/* Stat Cards */}
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={cardStyle('#0077b6')}>
          <h2>{projects.length}</h2>
          <p>Projects</p>
        </div>

        <div style={cardStyle('#00b4d8')}>
          <h2>{employees.length}</h2>
          <p>Employees</p>
        </div>

        <div style={cardStyle('#90e0ef')}>
          <h2>{tasks.length}</h2>
          <p>Tasks</p>
        </div>
      </div>

      {/* Employee Details */}
      <h2 style={{ marginBottom: '1rem', color: '#333' }}>Employee Directory</h2>
      {employees.length === 0 ? (
        <p style={{ color: '#777' }}>No employees found.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {employees.map((emp) => (
            <div
              key={emp.id || emp._id}
              style={{
                backgroundColor: '#fff',
                padding: '1.25rem',
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.07)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <img
                src={emp.image}
                alt={emp.name}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '1rem',
                  border: '3px solid #eee',
                }}
              />
              <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#222' }}>{emp.name}</h4>
              <p style={{ margin: '0.25rem 0', fontSize: '0.95rem', color: '#555' }}>{emp.position}</p>
              <small style={{ color: '#888' }}>{emp.email}</small>
            </div>
          ))}
        </div>
      )}

      {/* Sidebar Hint */}
      <div style={{ marginTop: '3rem', textAlign: 'center', color: '#888' }}>
        <p>Use the sidebar to manage Employees, Projects, or Tasks.</p>
      </div>
    </div>
  );
}


const cardStyle = (bgColor) => ({
  flex: '1 1 200px',
  backgroundColor: bgColor,
  color: '#fff',
  padding: '1.5rem',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
});
