import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todosSliceReducer from "./TodosSlice";

export const rootReducer = combineReducers({
  todosSliceReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootStateType = ReturnType<typeof rootReducer >
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatch = AppStoreType['dispatch']