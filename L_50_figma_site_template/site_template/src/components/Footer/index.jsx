import React from "react";
import s from "./index.module.css";

export default function Footer() {
  return (
    <div className={["wrapper", s.footer_block].join(" ")}>
      <p>2022 (c) All rights reserved. BuhOne.com Designed by: BuhOne</p>
      <p>Designed by: BuhOne</p>
    </div>
  );
}
