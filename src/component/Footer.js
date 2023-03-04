import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChange, statusChange } from "../redux/filter/action";

const numberOfTusk = (num_Of_Tusk) => {
  switch (num_Of_Tusk) {
    case 0:
      return " no task";
    case 1:
      return "1 task";

    default:
      return `${num_Of_Tusk} tasks`;
  }
};
const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const { status, colors } = filters;

  const handleFilterChange = (status) => {
    dispatch(statusChange(status));
  };

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChange(color, "removed"));
    } else {
      dispatch(colorChange(color, "added"));
    }
  };

  const remaining = todos.filter((todo) => !todo.complited).length;
  return (
    <>
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{numberOfTusk(remaining)} left</p>
        <ul className="flex space-x-1 items-center text-xs">
          <li
            className={`cursor-pointer ${status === "All" && "font-bold"}`}
            onClick={() => handleFilterChange("All")}
          >
            All
          </li>
          <li>|</li>
          <li
            className={`cursor-pointer ${
              status === "Incomplete" && "font-bold"
            }`}
            onClick={() => handleFilterChange("Incomplete")}
          >
            Incomplete
          </li>
          <li>|</li>
          <li
            className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
            onClick={() => handleFilterChange("Complete")}
          >
            Complete
          </li>
          <li></li>
          <li></li>
          <li
            className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
              colors.includes("green") && "bg-green-500"
            }`}
            onClick={() => handleColorChange("green")}
          ></li>
          <li
            className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
              colors.includes("red") && "bg-red-500"
            }`}
            onClick={() => handleColorChange("red")}
          ></li>
          <li
            className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
              colors.includes("yellow") && "bg-yellow-500 "
            }`}
            onClick={() => handleColorChange("yellow")}
          ></li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
