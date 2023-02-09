import React, { useState } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

function App() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState('');
  const [id, setId] = useState(uniqid());
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
    setId(uniqid());
  };

  const onSubmitTask = (e) => {
    e.preventDefault();
    setNumber(number + 1);
    setTasks(tasks.concat({ number, text, id }));
    setText('');
    setId(uniqid());
  };

  return (
    <div>
      <form onSubmit={onSubmitTask}>
        <label htmlFor='taskInput'>Enter task</label>
        <input
          onChange={handleChange}
          value={text}
          type='text'
          id='taskInput'
        />
        <button type='submit'>Add Task</button>
      </form>
      <Overview tasks={tasks} />
    </div>
  );
}

export default App;
