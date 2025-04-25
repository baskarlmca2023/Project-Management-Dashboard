export const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString();
  };
  
  export const getEmployeeName = (employees, id) => {
    const emp = employees.find(e => e.id === id);
    return emp ? emp.name : 'N/A';
  };
  