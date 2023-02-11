import React, { useState, useEffect } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

const LOCAL_STORAGE_KEY = 'todoApp.tasks';

function App() {
  const [complete, setComplete] = useState(false);
  const [text, setText] = useState('');
  const [id, setId] = useState(uniqid());
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTasks.length !== 0) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setText(e.target.value);
    setId(uniqid());
  };

  const onSubmitTask = (e) => {
    e.preventDefault();
    if (text === '') return;
    setComplete(false);
    setTasks(tasks.concat({ complete, text, id }));
    setText('');
    setId(uniqid());
  };

  const completeTask = (id) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.complete = !task.complete;
    setTasks(newTasks);
  };

  const deleteTask = (tasks, id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleClearCompleteTasks = () => {
    const newTasks = tasks.filter((task) => !task.complete);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Stuff I need to do</h1>
      <Overview
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
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
      <button onClick={handleClearCompleteTasks}>Clear Complete</button>
      <div>{tasks.filter((task) => !task.complete).length} left to do</div>
    </div>
  );
}

export default App;
