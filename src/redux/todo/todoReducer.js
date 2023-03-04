import {
  ADDED,
  ALLCOMPLITED,
  CLEARCOMPLITED,
  COLOECHANGED,
  DELETE,
  TOGGLED,
} from "./actionType";
import initialState from "./initialState";

const todoTextId = (todoItem) => {
  const todoId = todoItem.reduce(
    (iniId, newId) => Math.max(newId.id, iniId),
    -1
  );

  return todoId + 1;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: todoTextId(state),
          text: action.payload,
          complited: false,
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          complited: !todo.complited,
        };
      });

    case COLOECHANGED:
      const { color, todoId } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    case ALLCOMPLITED:
      return state.map((todo) => {
        return {
          ...todo,
          complited: true,
        };
      });
    case CLEARCOMPLITED:
      return state.filter((todo) => !todo.complited);
    default:
      return state;
  }
};

export default todoReducer;
