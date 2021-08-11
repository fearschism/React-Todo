import React, { useState } from "react";
import Todo from "./todo";
import TodoForm from "./todoForm";
export default function TodoList() {
  const [todos, settodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\*$/.test(todo.text)) {
      return;
    }
    const newtodo = [todo, ...todos];
    settodos(newtodo);
    console.log(...todos);
  };
  const updatetodo = (todoid, newvalue) => {
    if (!newvalue.text || /^\*$/.test(newvalue.text)) {
      return;
    }
    settodos((prev) =>
      prev.map((item) => (item.id === todoid ? newvalue : item))
    );
  };
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    settodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedtodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    settodos(updatedtodos);
  };
  return (
    <div>
      <h1>what's the plan for today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updatetodo={updatetodo}
      />
    </div>
  );
}
