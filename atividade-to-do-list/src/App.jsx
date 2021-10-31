import React from "react";
import "./App.css";
import { useState } from "react";
import Tasks from "./components/TodoList/TodoList";
import AddTask from "./components/Form/Form";
import { v4 as uuid } from "uuid";
import Header from "./components/Header/Header";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTodo = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuid(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header />

      <AddTask handleTaskAddition={addTodo} />
      <Tasks tasks={tasks} handleTaskDeletion={handleTaskDeletion} />
    </div>
  );
};

export default App;
