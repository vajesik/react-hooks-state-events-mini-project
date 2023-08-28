import React from "react";
import Task from "./Task.js";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
