import React from "react";
import s from "./index.module.css";

export default function ContactsForm() {
  return (
    <form className={s.contacts_form}>
      <div className={s.firstname_and_lastname}>
        <label>
          <p>Name</p>
          <input type="text" name="firstname" placeholder="John" />
        </label>

        <label>
          <p>Surname</p>
          <input type="text" name="lastname" placeholder="Brown" />
        </label>
      </div>

      <label>
        <p>Massage</p>
        <textarea type="text" name="massage" placeholder="Your message" />
      </label>
      <button>Send a message</button>
    </form>
  );
}
