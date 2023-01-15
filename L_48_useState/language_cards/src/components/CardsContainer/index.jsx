import React from "react";
import Card from "../Card";
import s from "./index.module.css";

export default function CardsContainer({ words_array }) {
  return (
    <div className={s.cards_comtainer}>
      {words_array.map((elem) => (
        <Card {...elem} key={elem.id} />
      ))}
    </div>
  );
}
