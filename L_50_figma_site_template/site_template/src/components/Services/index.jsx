import React from "react";
import { services } from "../../data/services";
import ServiceCard from "../ServiceCard";
import s from "./index.module.css";

export default function Services() {
  return (
    <section className={s.services_section}>
      <div className={["wrapper", s.services_block].join(" ")}>
        {/* <div className={`wrapper ${s.services_block}`}></div> */}
        <p className="subheader">Our services</p>
        <h2>We specialize</h2>
        <div className={s.services_container}>
          {services.map((elem) => (
            <ServiceCard {...elem} key={elem.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
