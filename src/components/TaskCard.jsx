import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <img src={task.image || '/default-task-image.png'} alt={task.title} className="task-image" />
      <div className="task-details">
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <p><strong>Assigned to:</strong> {task.employeeId}</p>
        <p><strong>ETA:</strong> {new Date(task.eta).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default TaskCard;
