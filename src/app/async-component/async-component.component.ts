import { ToDoListActions } from "./../app.actions";
import { NgRedux } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { IAppState } from "src/store";

@Component({
  selector: "app-async-component",
  templateUrl: "./async-component.component.html",
  styleUrls: ["./async-component.component.scss"]
})
export class AsyncComponentComponent implements OnInit {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ToDoListActions
  ) {}

  ngOnInit() {}

  getPokemon(): any {
    this.ngRedux.dispatch(this.actions.getPokemon());
  }
}
