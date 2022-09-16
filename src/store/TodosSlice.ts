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
      state.todos.push({...action.payload})
    },
    deleteTodo(state, action: any) {
      state.todos = state.todos.filter(f => f.id === action.payload.id)
    }
  }
})

export default todosSlice.reducer;
