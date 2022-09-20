import React, {useCallback} from 'react';
import s from './Todolist.module.css'
import {Paper} from "@mui/material";
import {AddItemForm} from "../../components/AddItemForm";


export type TodosPropsType = {
  title: string
  tasks: Array<TasksPropsType>
  TodolistId: string
  deleteTodo: (id: string) => void
  removeTask: (id: string, taskId: string) => void
  addTask: (id: string, title: string) => void
}

export type TasksPropsType = {
  title: string
  id: string
}

export function Todolist(props: TodosPropsType) {

  const addTask = useCallback(function (title: string) {
    props.addTask(props.TodolistId, title)
  }, [props])

  const removeTask = useCallback(function (id: string) {
    props.removeTask(props.TodolistId, id)
  }, [props])


  const divStyle = {
    backgroundColor: 'rgba(212, 169, 255, 0.1)',
    borderRadius: '10px',
    marginTop: '2px',
    marginRight: '10px',
  }

  return <div>
    <Paper elevation={3} className={s.todolistPaper}>
      <h3> {props.title}
        <button className={s.button} onClick={() => props.deleteTodo(props.TodolistId)}>x</button>
      </h3>
      <AddItemForm addItem={addTask}/>
      <div>
      </div>
      <ul>
        {
          props.tasks.map(t => {
            return <div>
              <div key={t.id} style={divStyle}>
                <span>{t.title}</span>
                <button className={s.button} onClick={() => removeTask(t.id)}>x</button>
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


