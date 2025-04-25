
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from './employeeSlice';

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        margin: '2rem auto',
        padding: '1.5rem',
        maxWidth: '900px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      }}
    >
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333' }}>Employee List</h3>

      {employees.length === 0 ? (
        <p style={{ color: '#666' }}>No employees found.</p>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {employees.map((emp) => (
            <div
              key={emp.id}
              style={{
                border: '1px solid #e0e0e0',
                padding: '1rem',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#f9f9f9',
              }}
            >
              {/* Employee Info */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img
                  src={emp.image}
                  alt={emp.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '2px solid #ddd',
                  }}
                />
                <div>
                  <h4 style={{ margin: '0 0 0.2rem 0', color: '#222' }}>{emp.name}</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#666' }}>{emp.position}</p>
                  <small style={{ color: '#999' }}>{emp.email}</small>
                </div>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => dispatch(deleteEmployee(emp.id))}
                style={{
                  backgroundColor: '#e63946',
                  color: '#fff',
                  padding: '0.5rem 1.2rem',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease-in-out',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#d62839')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#e63946')}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
