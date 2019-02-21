import { Injectable } from "@angular/core";

interface Action {
  type: string;
  payload?: any;
}

@Injectable()
export class ToDoListActions {
  static ADD_TASK = "ADD_TASK";
  static DELETE_TASK = "DELETE_TASK";

  addTask(task: String): Action {
    return { type: ToDoListActions.ADD_TASK, payload: task };
  }

  deleteTask(task: String): Action {
    return { type: ToDoListActions.DELETE_TASK, payload: task };
  }
}
