import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Overview({ tasks, deleteTask, completeTask, editTask }) {
  const handleClick = (e) => {
    const id = e.target.parentNode.parentNode.id;
    deleteTask(tasks, id);
  };

  const handleCompleteTaskClick = (e) => {
    const id = e.target.id;
    completeTask(id);
  };

  const handleEditTaskClick = (e) => {
    const id = e.target.parentNode.parentNode.id;
    console.log('id:', id);
    editTask(tasks, id);
  };

  return (
    <ol>
      {tasks.map((task) => {
        return (
          <li key={task.id} id={task.id}>
            <input
              id={task.id}
              type='checkbox'
              checked={task.complete}
              onChange={handleCompleteTaskClick}
            />{' '}
            {task.text}{' '}
            <button id={task.id} className='task-btn' onClick={handleClick}>
              <FontAwesomeIcon icon={solid('trash-can')} />
            </button>{' '}
            <button className='task-btn' onClick={handleEditTaskClick}>
              <FontAwesomeIcon icon={solid('edit')} />
            </button>
          </li>
        );
      })}
    </ol>
  );
}

export default Overview;
