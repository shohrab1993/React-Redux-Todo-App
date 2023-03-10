import React, { useState } from "react";
import { useDispatch } from "react-redux";
import doubleTick from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { added, allcomplited, clearComplite } from "../redux/todo/action";

const Header = () => {
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState("");

  const handleTodoInput = (e) => {
    setInputTodo(e.target.value);
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    dispatch(added(inputTodo));
    setInputTodo("");
  };

  const handleAllcomplite = () => {
    dispatch(allcomplited());
  };
  const handleAllDelete = () => {
    dispatch(clearComplite());
  };
  return (
    <>
      <div>
        <form
          className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
          onSubmit={handleTodoSubmit}
        >
          <img src={noteImage} className="w-6 h-6" alt="Add todo" />
          <input
            type="text"
            value={inputTodo}
            onChange={handleTodoInput}
            placeholder="Type your todo"
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          />
          <button
            type="submit"
            className={`appearance-none w-8 h-8 bg-[url(${plusImage})] bg-no-repeat bg-contain`}
          ></button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li
            className="flex space-x-1 cursor-pointer"
            onClick={handleAllcomplite}
          >
            <img className="w-4 h-4" src={doubleTick} alt="Complete" />
            <span>Complete All Tasks</span>
          </li>
          <li className="cursor-pointer" onClick={handleAllDelete}>
            Clear completed
          </li>
        </ul>
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default Header;
