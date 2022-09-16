import {AppDispatch} from "./store";
import {todosSlice} from "./TodosSlice";
import {TodolistAPI} from "../api/todolist-api";


export const fetchTodos = () => async (dispatch: AppDispatch) => {
  try {
    const response = await TodolistAPI.getTodos()
    dispatch(todosSlice.actions.todosFetchingSuccess(response.data))
  } catch (e) {
  }
}

export const addTodo = (title: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await TodolistAPI.createTodo(title)
    dispatch(todosSlice.actions.createTodo(response.data))

  } catch (e) {
  }
}

export const deleteTodo = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await TodolistAPI.deleteTodo(id)
    dispatch(todosSlice.actions.deleteTodo(response.data))

  } catch (e) {
  }
}
