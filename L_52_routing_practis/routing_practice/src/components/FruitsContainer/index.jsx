import React from "react";
import { fruits } from "../../data/fruits";
import Fruit from "../Fruit";
import s from "./index.module.css";

export default function FruitsContainer() {
  return (
    <div className={s.fruits_container}>
      {fruits
        .sort((a, b) => a.price - b.price)
        .map((el) => (
          <Fruit key={el.id} {...el} />
        ))}
    </div>
  );
}
