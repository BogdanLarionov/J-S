import React from "react";
import Task from "../Task";

export default function TasksContainer({ tasks }) {
  return (
    <div>
      Task:
      {tasks.map((elem) => (
        <Task {...elem} key={elem} />
      ))}
    </div>
  );
}
