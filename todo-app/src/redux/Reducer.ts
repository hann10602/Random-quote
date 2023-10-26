import { createAction, createReducer } from "@reduxjs/toolkit";
import { TodoType } from "../types/type";
import { todoInitial } from "../constant/todo";
import { v4 } from "uuid";

const initialState = {
  todoList: todoInitial,
};

export const addTodo = createAction<string>("todo/add");

export const updateTodo = createAction<string>("todo/update");

export const deleteTodo = createAction<string>("todo/delete");

export const deleteAllTodo = createAction("todo/deleteAll");

export const toggleAllTodo = createAction("todo/toggleAll");

export const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      const newId = v4();

      const newTodo: TodoType = {
        id: newId,
        title: action.payload,
        isCompleted: false,
      };

      state.todoList.push(newTodo);
    })
    .addCase(updateTodo, (state, action) => {
      const todo = action.payload;

      state.todoList.forEach((item) => {
        if (item.id === todo) {
          item.isCompleted = !item.isCompleted;
        }
      });
    })
    .addCase(deleteTodo, (state, action) => {
      const id = action.payload;

      state.todoList = state.todoList.filter((item) => item.id !== id);
    })
    .addCase(deleteAllTodo, (state) => {
      state.todoList = [];
    })
    .addCase(toggleAllTodo, (state) => {
      const isAllCompleted =
        state.todoList.filter((item) => item.isCompleted === true).length ===
        state.todoList.length;
      if (isAllCompleted) {
        state.todoList.forEach((item) => {
          item.isCompleted = false;
        });
      } else {
        state.todoList.forEach((item) => {
          if (item.isCompleted === false) {
            item.isCompleted = true;
          }
        });
      }
    });
});
