import React from 'react';
import { useSelector } from 'react-redux';

const ProjectList = () => {
  const projects = useSelector((state) => state.projects.list);

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '1000px',
        margin: '0 auto',
        fontFamily: 'sans-serif',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#222' }}>All Projects</h2>

      {projects.length === 0 ? (
        <p style={{ color: '#777' }}>No projects created yet.</p>
      ) : (
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {projects.map((project) => (
            <div
              key={project.id || project._id}
              style={{
                padding: '1.5rem',
                borderRadius: '10px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                borderLeft: '6px solid #0077b6',
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#333' }}>
                {project.title}
              </h3>
              <p style={{ margin: 0, fontSize: '1rem', color: '#555' }}>{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
