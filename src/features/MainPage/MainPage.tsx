import React, {useCallback} from 'react';
import {useEffect} from "react";
import './MainPage.css';
import {TasksPropsType, Todolist} from "../Todolist/Todolist";
import {AddItemForm} from "../../components/AddItemForm";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {addTodo, deleteTodo, fetchTodos} from "../../store/ActionCreators";
import {useAppDispatch} from "../../hooks/redux";

export const MainPage = () => {

  const todos = useSelector((state: RootStateType) => state.todosSliceReducer.todos)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const addTodolist = useCallback((title: string) => {
    dispatch(addTodo(title))
  }, [dispatch])

  const removeTodolist = useCallback(function (id: string) {
    dispatch(deleteTodo(id))
  }, [dispatch])

  return (
    <div>
      <h2>поле деятельности :)</h2>
      <AddItemForm addItem={addTodolist}/>
      <div className="todosBlock">
        {todos.map((t: { title: string; tasks: TasksPropsType[]; id: string; }) => {
          return <Todolist title={t.title} tasks={t.tasks} id={t.id} deleteTodo={removeTodolist}/>
        })}
      </div>
    </div>
  )
}