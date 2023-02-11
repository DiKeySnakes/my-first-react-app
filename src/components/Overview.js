import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Overview({ tasks, deleteTask, completeTask }) {
  const handleClick = (e) => {
    const id = e.target.parentNode.parentNode.id;
    console.log(id);
    deleteTask(tasks, id);
  };

  const handleCompleteTaskClick = (e) => {
    const id = e.target.id;
    console.log(id);
    completeTask(id);
  };

  return (
    <ol>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <input
              id={task.id}
              type='checkbox'
              checked={task.complete}
              onChange={handleCompleteTaskClick}
            />{' '}
            {task.text}{' '}
            <button id={task.id} onClick={handleClick}>
              <FontAwesomeIcon icon={solid('trash-can')} />
            </button>
          </li>
        );
      })}
    </ol>
  );
}

export default Overview;
