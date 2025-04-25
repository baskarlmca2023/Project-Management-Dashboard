import * as Yup from 'yup';

export const employeeSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  position: Yup.string().required('Position is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  image: Yup.string().required('Profile image is required'),
});

export const projectSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  logo: Yup.string().required('Logo is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date()
    .required('End date is required')
    .min(Yup.ref('startDate'), 'End date must be after start date'),
  employees: Yup.array().min(1, 'Assign at least one employee'),
});

export const taskSchema = Yup.object().shape({
  title: Yup.string().required('Task title is required'),
  description: Yup.string().required('Description is required'),
  projectId: Yup.string().required('Project is required'),
  employeeId: Yup.string().required('Assign an employee'),
  eta: Yup.date().required('ETA is required'),
  image: Yup.string().required('Image URL is required'),
});
