import React from "react";
import Card from "../Card";
import s from "./index.module.css";

export default function CardsContainer({ words_array, change_lang }) {
  return (
    <div className={s.cards_comtainer}>
      {words_array.map((elem) => (
        <Card {...elem} key={elem.id} change_lang={change_lang} />
      ))}
    </div>
  );
}
