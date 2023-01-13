import React from "react";
import Worker from "../Worker/index";
import { workers } from "../../data/workers";

function App() {
  // const active_workers = workers.filter((elem) => elem.in_office === true); // true. плохой стиль записи
  // console.log(active_workers);

  // const active_workers = workers.filter((elem) => elem.in_office === false); //  false. плохой стиль записи
  // console.log(active_workers);

  // const active_workers = workers.filter((elem) => !elem.in_office); // false
  // console.log(active_workers);

  // const active_workers = workers.filter((elem) => elem.in_office); // true
  // console.log(active_workers);

  return (
    <div>
      {/* <Worker id="1" firstname="Bogdan" lastname="Larionov" position="Boss" />
      <Worker id="2" firstname="Ivan" lastname="Ivanov" position="CEO" />
      <Worker id="3" firstname="Alena" lastname="Larionova" position="QA" /> */}

      {/* {workers.map((elem) => (
        <Worker {...elem} key={elem.id} />
      ))} */}
      {/* {active_workers.map((elem) => (
        <Worker {...elem} key={elem.id} />
      ))} */}

      {workers
        // .filter((elem) => elem.in_office)
        .map((elem) => (
          <Worker {...elem} key={elem.id} />
        ))}
    </div>
  );
}

export default App;
