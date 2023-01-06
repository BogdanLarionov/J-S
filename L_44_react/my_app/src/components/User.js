import React from "react";
import Button from "./Button";

export default function User({ id, firstname, lastname, age }) {
  // export default function User({ First_name, Last_name, Age }) {
  // export default function User({ props }) {
  let city = "Berlin";

  const user_style = {
    border: "1px solid black",
    borderRadius: "10px",
    padding: "10px",
    width: "200px",
    margin: "10px",
  };

  return (
    <div style={user_style}>
      {/* prox */}
      {/* <p>First name: {props.First_name}</p> */}

      {/* <p>First name: {First_name}</p>
      <p>Last name: {Last_name}</p>
      <p>Age: {Age}</p>
      <p>City: {city}</p> */}
      <p>ID: {id}</p>
      <p>First name: {firstname}</p>
      <p>Last name: {lastname}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <Button />
    </div>
  );
}
