import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAppState } from "src/store";
import { NgRedux } from "@angular-redux/store";

// interface Action {
//   type: string;
//   payload?: any;
// }

@Injectable()
export class ToDoListActions {
  static ADD_TASK = "ADD_TASK";
  static DELETE_TASK = "DELETE_TASK";
  static GET_POKEMON = "GET_POKEMON";

  constructor(private ngRedux: NgRedux<IAppState>, public http: HttpClient) {}

  addTask(task: String): any {
    return { type: ToDoListActions.ADD_TASK, payload: task };
  }

  deleteTask(task: String): any {
    return { type: ToDoListActions.DELETE_TASK, payload: task };
  }

  getPokemon(): any {
    let dispatch = this.ngRedux.dispatch;

    return (dispatch) =>
      this.http
        .get("https://pokeapi.co/api/v2/pokemon/")
        .toPromise()
        .then((response) => {
          console.log("response", response);
          dispatch({ type: "GET_POKEMON", payload: response });
        })
        .catch((err) => {
          dispatch({ type: "POKEMON_ERROR", payload: err });
        });
  }
}
