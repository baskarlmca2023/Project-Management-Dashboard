import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (data.username === 'admin' && data.password === 'admin123') {
      dispatch(login());
      navigate('/dashboard');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '5rem auto', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', background: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Admin Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <input
            type="text"
            placeholder="Username"
            {...register('username', { required: 'Username is required' })}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register('password', { required: 'Password is required' })}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>
        <button type="submit" style={{ padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '6px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
