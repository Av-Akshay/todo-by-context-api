import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  toDos: [],
  addToDo: () => {},
  deleteToDo: () => {},
});
export const ToDoProvider = ToDoContext.Provider;

export default function useToDo() {
  return useContext(ToDoContext);
}
