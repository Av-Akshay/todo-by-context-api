import React, { useState } from "react";

const ToDoLists = ({ addToDo, deleteToDo, toDos, editToDo }) => {
  let [inputChange, setInputChange] = useState("");
  let [editInput, setEditInput] = useState("");
  let [toggleBtn, setToggleBtn] = useState(true);
  let [check, setCheck] = useState(false);

  return (
    <div className="flex flex-col gap-5 w-9/12 mx-auto pt-20 max-sm:w-11/12">
      <div className="font-semibold w-full flex">
        <input
          onChange={(e) => {
            setInputChange(e.target.value);
          }}
          className="px-5 py-2 bg-white text-black rounded w-full"
          type="text"
          placeholder="Add Todo"
          value={inputChange}
        />
        <button
          onClick={() => {
            addToDo(inputChange);
            setInputChange("");
          }}
          className="bg-blue-900 text-white px-5 py-2 rounded max-sm:px-2 max-sm:py-1 max-sm:text-sm"
        >
          Add
        </button>
      </div>
      <div className="text-center">
        <ul className="text-white font-semibold flex flex-col gap-5 h-[72vh] overflow-auto">
          {toDos.map((item) => {
            return (
              <li
                key={item.id}
                className={`relative flex border border-black rounded p-2 ${
                  check ? " bg-slate-500" : "bg-gray-400"
                }`}
              >
                <div
                  className={`absolute h-[2px] bg-slate-800 top-1/2 left-7 w-[95%] ${
                    check ? "z-10" : "z-[-1]"
                  }`}
                ></div>
                <input
                  type="checkbox"
                  className="mr-2"
                  onClick={() => {
                    check ? setCheck(false) : setCheck(true);
                  }}
                />
                <input
                  onChange={(e) => {
                    setEditInput(e.target.value);
                  }}
                  className="w-full capitalize rounded text-white bg-transparent"
                  type="text"
                  defaultValue={item.todo}
                  disabled={toggleBtn ? true : false}
                />
                {toggleBtn ? (
                  <button
                    onClick={() => {
                      setToggleBtn(false);
                    }}
                    className="px-4 py-2 bg-green-700 rounded mr-2 max-sm:px-2 max-sm:py-1 max-sm:text-sm"
                    disabled={check ? true : false}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      editToDo(editInput, item.id);
                      setToggleBtn(true);
                    }}
                    className="max-sm:w-[60%] w-[20rem] px-4 py-2 max-sm:px-2 max-sm:py-1 max-sm:text-sm bg-green-700 rounded mr-2"
                  >
                    Add Edit Todo
                  </button>
                )}

                <button
                  onClick={() => {
                    deleteToDo(item);
                  }}
                  className="px-5 py-2 bg-red-700 rounded max-sm:px-2 max-sm:py-1 max-sm:text-sm"
                  disabled={check ? true : false}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDoLists;
