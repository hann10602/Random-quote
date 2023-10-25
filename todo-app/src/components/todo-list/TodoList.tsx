import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store';
import Todo from './Todo';
import { useLocation } from 'react-router-dom';

const TodoList = () => {
    let todoList = useSelector((state: RootState) => state.todoList);

    const location = useLocation();

    if(location.pathname === "/active") {
        todoList = todoList.filter(item => item.isCompleted === false)
    } else if(location.pathname === "/completed") {
        todoList = todoList.filter(item => item.isCompleted === true)
    }

  return (
    <div>
        {todoList.map(item => <Todo key={item.id} data={item}/>)}
    </div>
  )
}

export default TodoList