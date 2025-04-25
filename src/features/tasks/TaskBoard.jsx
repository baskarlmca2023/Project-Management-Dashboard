import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { updateTaskStatus } from './taskSlice';
import TaskCard from '../../components/TaskCard';

const columns = ['To Do', 'In Progress', 'Need for Test', 'Completed', 'Re-open'];

const TaskBoard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);
  const grouped = Object.fromEntries(columns.map(col => [col, []]));
  tasks.forEach(task => grouped[task.status || 'To Do'].push(task));

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination || destination.droppableId === source.droppableId) return;
    dispatch(updateTaskStatus({ id: draggableId, status: destination.droppableId }));
  };

  return (
    <div className="task-board">
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column) => (
          <Droppable droppableId={column} key={column}>
            {(provided) => (
              <div className="column" ref={provided.innerRef} {...provided.droppableProps}>
                <h3>{column}</h3>
                {grouped[column].map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <TaskCard task={task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default TaskBoard;
