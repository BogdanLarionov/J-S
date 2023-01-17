import React from "react";
import { aboutUs } from "../../data/aboutUs";
import AboutUsCard from "../AboutUsCard";
import s from "./index.module.css";

export default function AboutUs() {
  return (
    <section className={["wrapper", s.about_us_section].join(" ")}>
      <div>
        <p className="subheader">abaut us</p>
        <h2>
          Company <span className={s.accent}>IvanovProm</span>
        </h2>
        <p className={s.about_us_info}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas placeat
          consequuntur officiis deserunt modi perspiciatis facere tempora qui
          iste repellat? Sunt eaque ex consectetur neque optio, libero harum ut
          vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          eum placeat sapiente porro ut beatae qui omnis. Ratione quia
          repellendus, eaque non sit saepe, explicabo provident, totam aliquid
          cumque porro?
        </p>
      </div>
      <div className={s.about_us_cards}>
        {aboutUs.map((elem) => (
          <AboutUsCard {...elem} key={elem.id} />
        ))}
      </div>
    </section>
  );
}
