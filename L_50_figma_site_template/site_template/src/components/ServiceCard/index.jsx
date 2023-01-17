import React from "react";
import s from "./index.module.css";

export default function ServiceCard({ title, img }) {
  const card_style = {
    backgroundImage: `url(${img})`,
    // https://www.w3schools.com/cssref/pr_background-image.php
  };

  return (
    <div style={card_style} className={s.service_card}>
      {title}
    </div>
  );
}
