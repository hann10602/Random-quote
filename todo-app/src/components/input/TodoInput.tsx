import React, { useState } from "react";
import ArrowDown from "../../assets/arrow-down-sign-to-navigate.svg";
import { useDispatch } from "react-redux";
import { SubmitTarget } from "react-router-dom/dist/dom";
import { addTodo } from "../../redux/Reducer";

const TodoInput = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmitTodo = (e) => {
    if (e.key === "Enter") {
        const value = todo.trim();

      if (value != "") {
        dispatch(addTodo(value));
        setTodo("");
      }
    }
  };

  return (
    <div className="py-3 px-5 flex items-center border-b-2 border-gray-200 justify-between space-x-4">
      <img className="w-4 opacity-10" src={ArrowDown} alt="arrow-down" />
      <input
        className="flex-1 h-10 placeholder:text-2xl placeholder:text-gray-200 text-xl font-semibold placeholder:italic outline-none text-2xl px-3"
        placeholder="What need to be done?"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        onKeyDown={handleSubmitTodo}
      />
    </div>
  );
};

export default TodoInput;
