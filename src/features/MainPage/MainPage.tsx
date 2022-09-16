import React from 'react';
import {useEffect, useState} from "react";
import './MainPage.css';
import {TasksPropsType, Todolist} from "../Todolist/Todolist";
import axios from "axios";
import {AddItemForm} from "../../components/AddItemForm";

export const instance = axios.create({
  baseURL: 'https://6321e013fd698dfa29017213.mockapi.io/todolists',
})

export const MainPage = () => {
  const [todos, setArr] = useState<any>([])

  useEffect(() => {
    fetch('https://6321e013fd698dfa29017213.mockapi.io/todolists').then((res) => {
      return res.json()
    }).then((arr) => {
      console.log(arr)
      setArr(arr)
    })
  }, [])

  return (
    <div>
      <h1>todolist feed</h1>
      <AddItemForm addItem={() => console.log('hh')}/>
      <div className="todosBlock">
        {todos.map((t: { title: string; tasks: TasksPropsType[]; id: string; }) => {
          return <Todolist title={t.title} tasks={t.tasks} id={t.id}/>
        })}
      </div>
    </div>
  )
}