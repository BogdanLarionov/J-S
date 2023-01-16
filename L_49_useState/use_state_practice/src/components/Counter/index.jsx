// import React, { useState } from "react";
import { useState } from "react";

// https:ru.reactjs.org/docs/hooks-intro.html
// https:ru.reactjs.org/docs/hooks-reference.html

export default function Counter() {
  let [likes, setLikes] = useState(0);
  // const [likes, setLikes] = useState(0);

  // likes - переменная, которая хронит состояние
  // setLikes - функция, которая отслеживает изменение состояния

  //   let likes = 0;

  const incr = () => {
    setLikes((likes += 1));
    // setLikes((likes + 1));
    console.log(likes);
  };

  const decr = () => {
    setLikes((likes -= 1));
    // setLikes((likes - 1));
    console.log(likes);
  };
  return (
    <div>
      <p>{likes}</p>
      <button onClick={decr}>-</button>
      <button onClick={incr}>+</button>

      {/* <form> onSubmit={}</form> оброюотчик событий */}
    </div>
  );
}
