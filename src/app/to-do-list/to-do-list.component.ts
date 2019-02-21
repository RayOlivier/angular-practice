import { ToDoListActions } from "./../app.actions";
import { Component, OnInit } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store"; // <- New
import { IAppState } from "src/store";

@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.scss"]
})
export class ToDoListComponent implements OnInit {
  taskList: String[];
  // taskList;
  subscription;
  inputText: string;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ToDoListActions
  ) {
    this.subscription = ngRedux
      .select<String[]>("taskList")
      .subscribe((newList) => (this.taskList = newList));
    // this.taskList = ngRedux.getState().taskList;
  }
  // @select() taskList;
  ngOnInit() {
    console.log("taskList", this.taskList);
  }

  clear(): void {
    this.inputText = "";
  }

  addTask(input: String): void {
    // this.taskList.push(input);
    this.ngRedux.dispatch(this.actions.addTask(input));
    this.clear();
  }

  deleteTask(task: String): void {
    // this.taskList = this.taskList.filter((e) => {
    //   return e !== task;
    // });

    this.ngRedux.dispatch(this.actions.deleteTask(task));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // <- New
  }
}
