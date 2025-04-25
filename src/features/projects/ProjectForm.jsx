

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addProject } from '../../features/projects/projectSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Input from '../../components/common/Input';
import { Select } from '../../components/common/Select';
import Button from '../../components/common/Button';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Project title is required'),
  description: Yup.string().required('Description is required'),
  logo: Yup.string().url('Enter a valid URL').required('Logo URL is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date()
    .required('End date is required')
    .min(Yup.ref('startDate'), 'End date must be after start date'),
  employees: Yup.array().min(1, 'Assign at least one employee'),
});

const ProjectForm = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees?.list || []);

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      title: '',
      description: '',
      logo: '',
      startDate: '',
      endDate: '',
      employees: [],
    },
  });

  const onSubmit = (data) => {
    dispatch(addProject(data));
    reset();
    // Optional: show toast
    // toast.success('Project created successfully!');
  };

  return (
    <div className="container" style={formWrapperStyle}>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <h2 style={headingStyle}>Create New Project</h2>

        {/* Title, Logo, Dates */}
        <div style={gridStyle}>
          <Input
            label="Project Title"
            error={errors.title?.message}
            {...register('title')}
          />
          <Input
            label="Logo URL"
            error={errors.logo?.message}
            {...register('logo')}
          />
          <Input
            label="Start Date"
            type="date"
            error={errors.startDate?.message}
            {...register('startDate')}
          />
          <Input
            label="End Date"
            type="date"
            error={errors.endDate?.message}
            {...register('endDate')}
          />
        </div>

        {/* Description */}
        <Input
          label="Description"
          error={errors.description?.message}
          {...register('description')}
        />

        {/* Employee Select */}
        <Controller
          name="employees"
          control={control}
          render={({ field }) => (
            <Select
              label="Assign Employees"
              multiple
              options={employees.map((emp) => ({
                label: emp.name,
                value: emp.id || emp._id,
              }))}
              value={field.value}
              onChange={field.onChange}
              error={errors.employees?.message}
            />
          )}
        />

        {/* Submit Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="submit">Create Project</Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;

// ================================
// 🔧 Inline Styles (can be moved to styles.css or styled-components)
// ================================
const formWrapperStyle = {
  maxWidth: '960px',
  margin: '2rem auto',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  background: '#fff',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const headingStyle = {
  fontSize: '1.75rem',
  fontWeight: 600,
  textAlign: 'center',
  color: '#333',
};

const gridStyle = {
  display: 'grid',
  gap: '1.5rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
};
