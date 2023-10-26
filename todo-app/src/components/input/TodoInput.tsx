import { useState } from "react";
import ArrowDown from "../../assets/arrow-down-sign-to-navigate.svg";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleAllTodo } from "../../redux/Reducer";
import { RootState } from "../../store";

const TodoInput = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();

  const isAllCompleted = useSelector(
    (state: RootState) =>
      state.todoList.filter((item) => item.isCompleted === true).length !==
      state.todoList.length
  );

  const handleToggleAllTodo = () => {
    dispatch(toggleAllTodo());
  };

  const handleSubmitTodo = (e: { key: string; }) => {
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
      {isAllCompleted ? (
        <img
          className="w-4 opacity-10"
          src={ArrowDown}
          alt="arrow-down"
          onClick={handleToggleAllTodo}
        />
      ) : (
        <img
          className="w-4 opacity-50"
          src={ArrowDown}
          alt="arrow-down"
          onClick={handleToggleAllTodo}
        />
      )}
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
