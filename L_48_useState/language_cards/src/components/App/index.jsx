import CardsContainer from "../CardsContainer";
import { words } from "../../data/words";
import { useState } from "react";
import Trigers from "../Trigers";
import AddPostForm from "../AddPostForm";
import s from "./index.module.css";

function App() {
  const [cards, setCards] = useState(words);

  const change_to_eng = () => {
    setCards(
      cards.map((elem) => {
        elem.lang = "eng";
        return elem;
      })
    );
  };

  const change_to_rus = (words) => {
    setCards(
      cards.map((elem) => {
        elem.lang = "rus";
        return elem;
      })
    );
  };

  const change_lang = (id) => {
    setCards(
      cards.map((elem) => {
        if (elem.id === id) {
          elem.lang = elem.lang === "rus" ? "eng" : "rus";
        }
        return elem;
      })
    );
  };

  // const change_lang = (id) => {
  //   cards[id - 1].lang = cards[id - 1].lang === "rus" ? "eng" : "rus";
  //   setCards([...cards]);
  // };

  // https://metanit.com/web/javascript/5.6.php

  const add_card = (rus_value, eng_value) =>
    setCards([
      ...cards,
      {
        id: Date.now(),
        // id: cards.length + 1,
        eng: eng_value,
        rus: rus_value,
        // lang: "eng",
        lang: "rus",
      },
    ]);

  return (
    <div className={s.app_container}>
      <AddPostForm add_card={add_card} />
      <CardsContainer words_array={cards} change_lang={change_lang} />
      <Trigers change_to_eng={change_to_eng} change_to_rus={change_to_rus} />
    </div>
  );
}

export default App;
