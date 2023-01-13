import React from "react";
import Task from "../Task";

export default function TasksContainer({ tasks }) {
  return (
    <div>
      Tasks:
      {tasks.length !== 0 ? (
        tasks.map((elem) => <Task {...elem} key={elem.id} />)
      ) : (
        <span> No tasks</span>
      )}
    </div>
  );
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
