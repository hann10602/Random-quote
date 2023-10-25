import React, { useEffect, useState } from "react";
import { TodoType } from "../../types/type";
import CheckIcon from "../../assets/checkmark.svg";
import DeleteIcon from "../../assets/close.svg";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/Reducer";

type Props = {
  data: TodoType;
};

const Todo = ({ data }: Props) => {
  const [deleteButton, setDeleteButton] = useState<boolean>(false);

  const dispatch = useDispatch();

  return (
    <div
      className="w-full pl-2 pr-10 py-5 flex justify-between items-center border-b"
      onMouseEnter={() => setDeleteButton(true)}
      onMouseLeave={() => setDeleteButton(false)}
    >
      <div className="flex space-x-5">
        <div
          className="w-8 h-8 border rounded-full border-gray-300"
          onClick={() => dispatch(updateTodo(data.id))}
        >
          {data.isCompleted && <img src={CheckIcon} alt="check-icon" />}
        </div>
        {data.isCompleted ? (
          <del className="font-normal text-xl text-gray-300">{data.title}</del>
        ) : (
          <p className="font-semibold text-xl">{data.title}</p>
        )}
      </div>
      {deleteButton && (
        <img
          className="w-3 opacity-40"
          src={DeleteIcon}
          alt="delete-icon"
          onClick={() => {
            dispatch(deleteTodo(data.id))
          }}
        />
      )}
    </div>
  );
};

export default Todo;
