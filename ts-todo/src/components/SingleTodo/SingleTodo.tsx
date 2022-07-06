import React from "react";
//css
import "../../style.css";
//TodoModel
import { TodoModel } from "../model";

//type
type Props = {
  todo: TodoModel;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <div>
      <h3>{todo.todo}</h3>
      <h3>{todo.todo}</h3>
      <h3>{todo.todo}</h3>
    </div>
  );
};

export default SingleTodo;
