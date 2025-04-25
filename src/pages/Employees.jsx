
import EmployeeForm from '../features/employees/EmployeeForm';
import EmployeeList from '../features/employees/EmployeeList';

function Employees() {
  return (
    <div style={{ padding: '2rem' }}> 
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}

export default Employees;
