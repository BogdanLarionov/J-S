import React from "react";
// import style from "./User/index.module.css";
import s from "../User/index.module.css";
// import  "./User/index.module.css";
import TasksContainer from "../TasksContainer";

export default function User({
  id,
  firstname,
  lastname,
  adderess,
  salary,
  tasks,
}) {
  // const user_style = {
  //   border: "1px solid black",
  //   borderRadius: "10px",
  //   padding: "10px",
  //   margin: "10px",
  //   background: "lightblue",
  //   width: "200px",
  // };

  return (
    // <div style={user_style}>
    <div className={s.user_card}>
      <p>ID: {id}</p>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>

      <p className={s.address}>Address: {adderess}</p>
      <p>Salary: {salary}</p>
      <TasksContainer tasks={tasks} />
    </div>
  );
}
