import axios, {AxiosResponse} from "axios";

//types
export type TodolistApiGetType = {
  title: string
  tasks: Array<TasksGetType>
  id: string
}

export type TasksGetType = {
  title: string
}

const instance = axios.create({
  baseURL: 'https://6321e013fd698dfa29017213.mockapi.io/todolists',
})

export const TodolistAPI = {
  getTodos: () => {
    return instance.get<TodolistApiGetType[]>('')
  },
  createTodo(title: string) {
    return instance.post<{ title: string }, AxiosResponse<{ item: TodolistApiGetType }>>('', {title});
  },
  createTask(id: string, title: string) {
    return instance.post<{ id: string, title: string }, AxiosResponse<{ item: TasksGetType }>>(`/${id}/tasks`, {title});
  },
  deleteTask(id:string, taskId: string) {
    return instance.delete<any>(`/${id}/tasks/${taskId}`)
  },
  deleteTodo(id:string) {
    return instance.delete<TodolistApiGetType[]>(`/${id}`)
  },
}