import {ITodolists} from "./model/ITodolists";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ITodosSlice {
  todos: ITodolists[]
}

const InitialState: ITodosSlice = {
  todos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState: InitialState,
  reducers: {
    todosFetchingSuccess(state, action: PayloadAction<ITodolists[]>) {
      state.todos = action.payload
    },
    createTodo(state, action: any) {
      console.log(action.payload)
      state.todos.push({...action.payload, id: Math.random().toString(), tasks: []})
    },
    createTaskTC(state, action: any) {

      // @ts-ignore
      state.todos.find(fi => fi.id === action.payload.id).tasks.push({title: action.payload.title, id: Math.random().toString()})
    },
    deleteTaskTC(state, action: any) {
      // @ts-ignore
      state.todos.find(fi => fi.id === action.payload.id).tasks.filter(f => f.id !== action.payload.taskId)

    },
    deleteTodo(state, action: any) {
      state.todos = state.todos.filter(f => f.id !== action.payload)
    }
  }
})

export default todosSlice.reducer;
