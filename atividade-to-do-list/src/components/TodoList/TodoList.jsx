import React from "react";
import Task from "../ToDo/ToDo";

function Tasks({ tasks, handleTaskClick, handleTaskDeletion }) {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  );
}

export default Tasks;
