import { ToDoListActions } from "./app/app.actions";
// import { Action } from "redux";
import { last } from "@angular/router/src/utils/collection";

export interface IAppState {
  taskList: String[];
}

interface Action {
  type: string;
  payload?: any;
}

export const INITIAL_STATE: IAppState = {
  taskList: ["Do laundry", "Learn angular"]
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch (action.type) {
    case ToDoListActions.ADD_TASK:
      return { taskList: [...lastState.taskList, action.payload] };

    case ToDoListActions.DELETE_TASK:
      return {
        taskList: lastState.taskList.filter((e) => e !== action.payload)
      };
  }

  return lastState;
}
