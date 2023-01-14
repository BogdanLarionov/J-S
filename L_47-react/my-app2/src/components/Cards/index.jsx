import React from "react";
import Worker from "../Worker";

export default function Cards({ workers }) {
  // const active_workers = workers.filter((elem) => elem.in_office);

  return (
    <div>
      {workers.map((elem) => (
        <Worker {...elem} key={elem.id} />
      ))}
    </div>
  );
}

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

let array = [3, 1, 10, 7, 2, 24];
console.log(array.sort()); // [1, 10, 2, 24, 3, 7]
// ментод sort() - сортирует только по первым числам

let array1 = [3, 1, 10, 7, 2, 24];
console.log(array1.sort((a, b) => a - b)); // [1, 2, 3, 7, 10, 24];
console.log(array1.sort((a, b) => b - a)); // [24, 10, 7, 3, 2, 1] // отсортирует от меньшего к большему
