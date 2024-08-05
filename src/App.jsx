import { useState } from "react";
import { ToDoProvider } from "./context/toDoContext";
import ToDoLists from "./components/ToDoLists";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [toDos, setToDos] = useState([]);
  const addToDo = (list) => {
    setToDos((preValue) => {
      return [...preValue, { todo: list, id: uuidv4() }];
    });
  };

  const deleteToDo = (item) => {
    let filterToDo = toDos.filter((val) => {
      return val.id !== item.id;
    });
    setToDos(filterToDo);
  };
  let editToDo = (value, id) => {
    setToDos((preVal) =>
      preVal.map((item) =>
        item.id === id ? { todo: value, id: uuidv4() } : item
      )
    );
  };
  return (
    <ToDoProvider value={{ toDos, addToDo, deleteToDo }}>
      <div className="bg-slate-900 h-screen ">
        <ToDoLists
          deleteToDo={deleteToDo}
          addToDo={addToDo}
          toDos={toDos}
          editToDo={editToDo}
        />
      </div>
    </ToDoProvider>
  );
}

export default App;
