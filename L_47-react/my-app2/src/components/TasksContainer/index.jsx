import React from "react";
import Task from "../Task";

export default function TasksContainer({ tasks }) {
  return (
    <div>
      Tasks:
      {tasks.length !== 0 ? (
        tasks
          .sort((a, b) => a.done - b.done)
          .map((elem) => <Task {...elem} key={elem.id} />)
      ) : (
        <span> No tasks</span>
      )}
    </div>
  );
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

let array = [3, 1, 10, 7, 2, 24];

console.log(array.sort()); // [1, 10, 2, 24, 3, 7]
// ментод sort() - сортирует только по первым числам

let array1 = [3, 1, 10, 7, 2, 24];
console.log(array1.sort((a, b) => a - b)); // [1, 2, 3, 7, 10, 24];
console.log(array1.sort((a, b) => b - a)); // [24, 10, 7, 3, 2, 1].    // отсортирует от меньшего к большему
