import React from "react";
import Page from "./Page";
import { Link, useLocation } from "react-router-dom";
import TodoInput from "./input";
import TodoList from "./todo-list";
import { RootState } from "../store";
import { useSelector } from "react-redux";

type PagesType = {
  id: number;
  pathname: string;
  to: string;
};

const Pages: PagesType[] = [
  {
    id: 1,
    pathname: "All",
    to: "/",
  },
  {
    id: 2,
    pathname: "Active",
    to: "/active",
  },
  {
    id: 3,
    pathname: "Completed",
    to: "/completed",
  },
];

const TodoApp = () => {
  const location = useLocation();

  const completedQuantity = useSelector((state: RootState) =>
    state.todoList.reduce(
      (s, item) => (item.isCompleted === true ? s + 1 : s),
      0
    )
  );

  return (
    <div className="w-520px border border-gray-200 bg-white shadow-md">
      <TodoInput />
      <TodoList />
      <div className="flex justify-between text-gray-500 text-sm items-center px-2 h-10">
        <p>{completedQuantity} items left</p>
        <div className="flex space-x-4">
          {Pages.map((item) => (
            <Link
              className={`${
                location.pathname === item.to
                  ? "border-gray-200"
                  : "border-white"
              } hover:border hover:border-gray-200 rounded-sm border py-0.5 px-1`}
              key={item.id}
              to={item.to}
            >
              <p>{item.pathname}</p>
            </Link>
          ))}
        </div>
        <p className="hover:underline cursor-pointer">Clear completed</p>
      </div>
    </div>
  );
};

export default TodoApp;
