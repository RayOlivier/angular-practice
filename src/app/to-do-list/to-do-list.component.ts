import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.scss"]
})
export class ToDoListComponent implements OnInit {
  taskList: String[] = ["Do laundry", "Learn angular"];
  myTask: String = this.taskList[0];

  constructor() {}

  ngOnInit() {}

  addTask(input: String): void {
    console.log("input", input);
    this.taskList.push(input);
  }

  deleteTask(task: String): void {
    console.log("task", task);
    this.taskList = this.taskList.filter((e) => {
      console.log("e", e);
      return e !== task;
    });
  }
}
