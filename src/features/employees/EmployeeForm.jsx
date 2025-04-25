
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addEmployee } from './employeeSlice';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import ErrorBoundary from '../../components/ErrorBoundary';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  position: yup.string().required('Position is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  image: yup.string().url('Must be a valid URL').required('Profile Image URL is required'),
});

export default function EmployeeForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    dispatch(addEmployee(data));
    reset();
  };

  return (
    <ErrorBoundary>
      <div
        style={{
          maxWidth: '600px',
          margin: '2rem auto',
          padding: '2rem',
          borderRadius: '12px',
          backgroundColor: '#fff',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h2 style={{ textAlign: 'center', fontSize: '1.75rem', marginBottom: '1.5rem', color: '#333' }}>
          Add New Employee
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Input
            label="Full Name"
            name="name"
            register={register}
            error={errors.name}
          />
          <Input
            label="Position"
            name="position"
            register={register}
            error={errors.position}
          />
          <Input
            label="Official Email"
            name="email"
            register={register}
            error={errors.email}
          />
          <Input
            label="Profile Image URL"
            name="image"
            register={register}
            error={errors.image}
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit">Add Employee</Button>
          </div>
        </form>
      </div>
    </ErrorBoundary>
  );
}
