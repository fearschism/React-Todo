import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setinput] = useState("");
  const handlechange = (e) => {
    setinput(e.target.value);
  };
  const handle = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setinput("");
  };
  return (
    <form className="todo-form" onSubmit={handle}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handlechange}
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}
