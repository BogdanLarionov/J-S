import React from "react";
import ToDoItem from "./ToDoItem";

// export default function ToDoContainer(props) {
export default function ToDoContainer({ todo }) {
  //   console.log(props);
  //   console.log(props.todo);
  //   return <p>ToDoContainer</p>;

  //   const items = props.todo.map((todo) => (
  //     <ToDoItem title={todo.title} description={todo.description} />
  //   ));

  //   const todo = props.todo;
  //   const { todo } = props;

  return (
    <div>
      {/* -------cпособ */}

      <ToDoItem
        title={"Поченить стол"}
        description={"Он очень нужен в хозяйстве"}
      />
      {/* -------cпособ */}

      <ToDoItem title={"Из ToDoItem.jsx"} description={"взяли Props"} />
      {/* -------cпособ */}

      {/* {items} */}
      {/* -------cпособ */}
      {/* {props.todo.map((todo) => (
        <ToDoItem title={todo.title} description={todo.description} />
      ))} */}
      {/* -------cпособ */}

      {todo.map((todo) => (
        <ToDoItem title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}
