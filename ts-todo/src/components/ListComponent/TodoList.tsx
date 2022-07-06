import React from "react";
//css
import "../../style.css";
//import interface
import { TodoModel } from "../model";
//component
import SingleTodo from "../SingleTodo/SingleTodo";

//interface
interface Props {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      <h1>React Lists</h1>
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
