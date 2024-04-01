
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTaskCompletion } from '../redux/tasksSlice'; // Add this action

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleToggleCompletion = (taskId) => {
    dispatch(toggleTaskCompletion(taskId));
  };

  return (
    <ul className='task-list'>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <label>
            {task.text}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompletion(task.id)}
            />
          </label>
          <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
