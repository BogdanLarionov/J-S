import React from "react";
import s from "./index.module.css";
// import './index.css' - import css
import TasksContainer from "../TasksContainer";

export default function index({
  id,
  firstname,
  lastname,
  position,
  in_office,
  avatar,
  tasks,
}) {
  //   console.log(s);

  const cord_style = {
    backgroundColor: in_office ? "lightgreen" : "Lightgray",

    color: in_office ? "" : "blue",
    fontSize: firstname === "Olga" ? "10px" : "",
  };

  //   const card_text = {
  //     color: in_office ? "black" : "blue",
  //   };

  // Оператор нулевого слияния - ??
  //  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
  // если в avatar null or undefine запишется "./media/no_face.png" а если в avatar что-то есть запишется в img_url
  const img_url = avatar ?? "./media/no_face.png";
  //   const img_url = avatar || "./media/no_face.png";
  //   const img_url2 = avatar ? avatar : "./media/no_face.png";
  //   const img_url = avatar === "" ? "./media/no_face.png" : avatar;
  return (
    <div className={s.worker_card} style={cord_style}>
      {/* <p style={card_text}>ID: {id}</p>
      <p style={card_text}>Firstname: {firstname}</p>
      <p style={card_text}>Lastname: {lastname}</p>
      <p style={card_text}>Position: {position}</p> */}
      <p>ID: {id}</p>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Position: {position}</p>
      {/* <img src={avatar} alt="worker" /> */}
      <img src={img_url} alt="worker" />
      {/* <img src={img_url2} alt="worker" /> */}

      <TasksContainer tasks={tasks} />
    </div>
  );
}

// У работника с in_office falce поменять цвет текста на синий
