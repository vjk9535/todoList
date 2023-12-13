import { configureStore } from "@reduxjs/toolkit";
import  todoList  from "../Features/todoReducer";
export const store= configureStore({
    reducer: todoList
}) 