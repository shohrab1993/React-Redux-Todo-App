import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Todo = () => {
  const todo = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filter);
  const { status, colors } = filters;

  const filterByStatus = (todo) => {
    switch (status) {
      case "Complete":
        return todo.complited;
      case "Incomplete":
        return !todo.complited;
      default:
        return true;
    }
  };

  const filterByColor = (todo) => {
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };
  return (
    <>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {todo
          .filter(filterByStatus)
          .filter(filterByColor)
          .map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default Todo;
