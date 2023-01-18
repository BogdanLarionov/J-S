import React from "react";
import ContactsForm from "../ContactsForm";
import s from "./index.module.css";

export default function Contacts() {
  return (
    <section className={s.contacts_section}>
      <div className={["wrapper", s.contacts_block].join(" ")}>
        <div className={s.contacts_info}>
          <h2>Contact Us</h2>
          <p>
            Do you have any questions? Write to us - we will answer as soon as
            possible!
          </p>
          <div className={s.phone_and_mail}>
            <p>+1 716-266-6008</p>
            <p>order@bu-one.com</p>
          </div>
        </div>
        <ContactsForm />
      </div>
    </section>
  );
}
