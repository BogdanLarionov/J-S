import React from "react";
import Task from "../Task";

export default function TasksContainer({ tasks }) {
  return (
    <div>
      Tasks:
      {tasks.map((elem) => (
        <Task key={elem.id} {...elem} />
      ))}
    </div>
  );
}
