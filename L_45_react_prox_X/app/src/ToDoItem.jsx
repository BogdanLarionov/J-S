import React from "react";

export default function ToDoItem(props) {
  const title = props.title;
  const description = props.description;
  return (
    <div>
      <p>
        {title} - {description}
      </p>
      <p>{description}</p>
    </div>
  );
}
