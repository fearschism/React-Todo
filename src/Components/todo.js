import React, { useState } from "react";
import TodoForm from "./todoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
export default function Todo({ todos, completeTodo, removeTodo, updatetodo }) {
  const [edit, setedit] = useState({
    id: null,
    value: ""
  });
  const submitup = (value) => {
    updatetodo(edit.id, value);
    setedit({
      id: null,
      value: ""
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitup} />;
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete ccc" : "todo-row ccc"}
      key={index}
    >
      <div
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
        className="boldy"
      >
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setedit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}
