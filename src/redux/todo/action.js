import {
  ADDED,
  ALLCOMPLITED,
  CLEARCOMPLITED,
  COLOECHANGED,
  DELETE,
  TOGGLED,
} from "./actionType";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggle = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const allcomplited = () => {
  return {
    type: ALLCOMPLITED,
  };
};

export const clearComplite = () => {
  return {
    type: CLEARCOMPLITED,
  };
};

export const colorChange = (todoId, color) => {
  return {
    type: COLOECHANGED,
    payload: {
      color,
      todoId,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETE,
    payload: todoId,
  };
};
