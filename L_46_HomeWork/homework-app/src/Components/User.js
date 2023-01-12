import React from "react";

export default function User({ id, firstname, lastname, address, salary }) {
  return (
    <div style={user_style}>
      <p>Id: {id}</p>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Address:{address}</p>
      <p>Salary: {salary}</p>
    </div>
  );
}

const user_style = {
  border: "1px solid black",
  borderRadius: "10px",
  padding: "10px",
  margin: "10px",
  background: "lightblue",
  width: "200px",
};
