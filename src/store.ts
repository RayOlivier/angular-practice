import { HttpClient } from "@angular/common/http";
import { ToDoListActions } from "./app/app.actions";
import { applyMiddleware, Store, compose, createStore } from "redux";
import thunk from "redux-thunk";

// import { Action } from "redux";

export interface IAppState {
  taskList: String[];
  pokemon: Array<Object>;
}

interface Action {
  type: string;
  payload?: any;
}

export const INITIAL_STATE: IAppState = {
  taskList: ["Do laundry", "Learn angular"],
  pokemon: []
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch (action.type) {
    case ToDoListActions.ADD_TASK:
      return {
        taskList: [...lastState.taskList, action.payload],
        pokemon: lastState.pokemon
      };

    case ToDoListActions.DELETE_TASK:
      return {
        taskList: lastState.taskList.filter((e) => e !== action.payload),
        pokemon: lastState.pokemon
      };
    case ToDoListActions.GET_POKEMON:
      console.log("action.payload", action.payload.results);
      return { taskList: lastState.taskList, pokemon: action.payload.results };
  }
  return lastState;
}
export const store = createStore(
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(thunk)
);
