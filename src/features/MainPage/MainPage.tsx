import React, {useCallback} from 'react';
import {useEffect} from "react";
import './MainPage.css';
import {Todolist} from "../Todolist/Todolist";
import {AddItemForm} from "../../components/AddItemForm";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {addTodo, createTaskTC, deleteTask, deleteTodo, fetchTodos} from "../../store/ActionCreators";
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

  const addTask = useCallback(function (id: string, title: string) {
          dispatch(createTaskTC(id, title))
    setTimeout(() => {
      dispatch(fetchTodos())
    }, 1000)
      }, [dispatch])


  const removeTask = useCallback(function (id: string, taskId: string) {
    dispatch(deleteTask(id, taskId))
  }, [dispatch])

  const removeTodolist = useCallback(function (id: string) {
    dispatch(deleteTodo(id))
    setTimeout(() => {
      dispatch(fetchTodos())
    }, 3000)
  }, [dispatch])

  return (
    <div>
      <h2>поле деятельности :)</h2>
      <AddItemForm addItem={addTodolist}/>
      <div className="todosBlock">
        {todos.map((t: any) => {
          return <div key={t.id}>
            <Todolist
              title={t.title}
              tasks={t.tasks}
              TodolistId={t.id}
              deleteTodo={removeTodolist}
              removeTask={removeTask}
              addTask={addTask}
            />
          </div>

        })}
      </div>
    </div>
  )
}