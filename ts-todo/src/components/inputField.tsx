import React, { useRef } from "react";
//css
import "../style.css";

//interface
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

let InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  //ref hook
  let inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="enter a task"
        className="input__box"
      />
      <button type="submit" className="input__submit">
        go
      </button>
    </form>
  );
};

export default InputField;
