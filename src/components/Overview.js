import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Overview(props) {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.number}. {task.text}{' '}
            <button>
              <FontAwesomeIcon icon={solid('trash-can')} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Overview;
