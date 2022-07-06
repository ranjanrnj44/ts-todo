import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";

//components
import InputField from "./components/inputField";
import TodoList from "./components/ListComponent/TodoList";
//interface import
import { TodoModel } from "./components/model";

let App: React.FC = () => {
  //state
  let [todo, setTodo] = useState<string>("");
  //state that has all todo
  let [todos, setTodos] = useState<TodoModel[]>([]);

  console.log(todos);

  //handleAdd
  let handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: nanoid(), todo, isDone: false }]);
      setTodo("");
    }
  };

  //handleDelete
  // let handleDelete = (id: any) => {
  //   let filteredData = todos.filter((item) => id !== item.id);
  //   setTodos(filteredData);
  // };

  return (
    <div className="App">
      <span className="heading">TaskList</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

//basics
// let name: string = "Max";
// let numb: number = 18;
// let isTrue: boolean = true;
// let hobbies: string[] = ["play", "walk", "roam"];
// let hobbiesTuple: [string, number] = ["cook", 12]; // tuple for fixed length or array and types
// let person: Object; // not recommended way so use Alias

// type Person = {
//   name: string;
//   age?: number; // if we need age as optional use ?
// };
// let person1: Person = {
//   name: "max",
//   age: 1,
// };
// let lotsOfPeople: Person[]; //array of person

// //union for num or string
// let myAge: number | string; // union

// function printName(name: string) {
//   console.log(name);
// }
// printName(name);
