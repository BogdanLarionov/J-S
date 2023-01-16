import React from "react";
import logo from "./media/buh_one_logo.png";
// импортировали картинку
import s from "./index.module.css";

export default function Nav() {
  return (
    <nav className={["wrapper", s.nav_block].join(" ")}>
      {/*  className={s.nav_block}
          className='wrapper' 
          className='wrapper s.nav_block'
          className=`{wrapper ${s.nav_block} }` */}
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <ul></ul>
      <li>Главная</li>
      <li>услуги</li>
      <li>кейсы</li>
      <li>O компании</li>
      <li>контакты</li>
    </nav>
  );
}

let a = ["hello", "dood day", "good afternoon", "good nigth"];
console.log(a); // ["hello", "dood day", "good afternoon", "good nigth"];
// метод join преодбазует из масива в сткоку
console.log(a.join()); // 'hello, dood day, good afternoon, good nigth'
console.log(a.join("")); // 'hello dood day good afternoon good nigth'
console.log(a.join(" ")); // 'hello dood day good afternoon good nigth'
