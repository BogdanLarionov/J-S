import React from "react";
import s from "./index.module.css";

export default function Trigers({ change_to_eng, change_to_rus }) {
  return (
    <div className={s.trigers}>
      <button onClick={change_to_eng}>Eng</button>
      <button onClick={change_to_rus}>Rus</button>
    </div>
  );
}
