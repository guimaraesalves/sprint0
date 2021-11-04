import React from "react";
import { CgClose } from "react-icons/cg";

import "./ToDo.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  return (
    <div className="task-container">
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;