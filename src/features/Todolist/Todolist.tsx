import React from 'react';
import s from './Todolist.module.css'
import {Paper} from "@mui/material";
import {AddItemForm} from "../../components/AddItemForm";


export type TodosPropsType = {
  title: string
  tasks: Array<TasksPropsType>
  id: string
  deleteTodo: (id: string) => void
}

export type TasksPropsType = {
  title: string
}


export function Todolist(props: TodosPropsType) {

  return <div>
    <Paper elevation={3} className={s.todolistPaper}>
    <h3> {props.title}
      <button className={s.button} onClick={() => props.deleteTodo(props.id)}>x</button>
    </h3>
      <AddItemForm addItem={() => console.log('tt')}/>
      <div>
    </div>
    <ul>
      {
        props.tasks.map(t => {
          const onClickHandler = () => alert('remove task')

          return <div>
              <div>
                <span>{t.title}</span>
                <button className={s.button} onClick={onClickHandler}>x</button>
              </div>
          </div>
        })
      }
    </ul>
    <div>
    </div>
    </Paper>
  </div>
}


