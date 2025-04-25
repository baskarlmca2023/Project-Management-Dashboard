import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { addTask } from './taskSlice';
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';
import Button from '../../components/common/Button';

const schema = Yup.object().shape({
  title: Yup.string().required('Task title is required'),
  description: Yup.string().required('Description is required'),
  projectId: Yup.string().required('Project is required'),
  employeeId: Yup.string().required('Assign an employee'),
  eta: Yup.date().required('ETA is required'),
  image: Yup.string().required('Image URL is required'),
});

const TaskForm = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.list || []);
  const employees = useSelector((state) => state.employees.list || []);

  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      description: '',
      projectId: '',
      employeeId: '',
      eta: '',
      image: '',
    },
  });

  const selectedProjectId = watch('projectId');
  const selectedProject = projects.find((p) => p.id === selectedProjectId);
  const assignedEmployees = selectedProject?.employees || [];

  const onSubmit = (data) => {
    dispatch(addTask(data));
    reset();
  };

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '2rem auto',
        padding: '2rem',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#1976d2' }}>Create New Task</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 45%' }}>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input label="Task Title" error={errors.title?.message} {...field} />
              )}
            />
          </div>
          <div style={{ flex: '1 1 45%' }}>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Input label="Description" error={errors.description?.message} {...field} />
              )}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 45%' }}>
            <Controller
              name="projectId"
              control={control}
              render={({ field }) => (
                <Select
                  label="Select Project"
                  options={projects.map((p) => ({ value: p.id, label: p.title }))}
                  error={errors.projectId?.message}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>

          <div style={{ flex: '1 1 45%' }}>
            <Controller
              name="employeeId"
              control={control}
              render={({ field }) => (
                <Select
                  label="Assign Employee"
                  options={(employees || [])
                    .filter((e) => assignedEmployees.includes(e.id))
                    .map((e) => ({ value: e.id, label: e.name }))}
                  error={errors.employeeId?.message}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 45%' }}>
            <Controller
              name="eta"
              control={control}
              render={({ field }) => (
                <Input
                  label="ETA"
                  type="date"
                  error={errors.eta?.message}
                  {...field}
                />
              )}
            />
          </div>
          <div style={{ flex: '1 1 45%' }}>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <Input
                  label="Reference Image URL"
                  error={errors.image?.message}
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <Button type="submit">Create Task</Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
