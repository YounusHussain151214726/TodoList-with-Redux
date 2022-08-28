import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, deleteTodos } from "../action/Actions";

const Todolist = () => {
  const [inputData, setInputData] = useState();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.Todoreducer.List);
  return (
    <>
      <section>
        <div className="TextField">
          <h1 className="heading"> What You Have To Do ? Just Todo 📝 </h1>
          <input
            className="Input"
            placeholder="  ✍  What To Do ?"
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          <span
            className="Click"
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}
          >
            ➕
          </span>

          {list.map((elem) => {
            return (
              <div className="Card">
                <p>{elem.Data}</p>
                <span
                  className="Delete"
                  onClick={() => dispatch(deleteTodo(elem.id))}
                >
                  ⛔
                </span>
              </div>
            );
          })}

          <button className="remove" onClick={() => dispatch(deleteTodos())}>
            REMOVE ALL
          </button>
        </div>
      </section>

      <div className="claim">
        Design & Developed By Younus @ All Right Reserved.
      </div>
    </>
  );
};

export default Todolist;
