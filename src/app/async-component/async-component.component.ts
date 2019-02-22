import { ToDoListActions } from "./../app.actions";
import { NgRedux } from "@angular-redux/store";
import { Component, OnInit, OnChanges } from "@angular/core";
import { IAppState } from "src/store";

@Component({
  selector: "app-async-component",
  templateUrl: "./async-component.component.html",
  styleUrls: ["./async-component.component.scss"]
})
export class AsyncComponentComponent implements OnInit, OnChanges {
  subscription;
  pokemon: Array<Object>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ToDoListActions
  ) {
    this.subscription = ngRedux
      .select<Array<Object>>("pokemon")
      .subscribe((newPokemon) => {
        console.log("newPokemon", newPokemon);
        this.pokemon = newPokemon;
      });
  }

  ngOnInit() {
    console.log("this.pokemon", this.pokemon);
  }

  ngOnChanges() {
    console.log("this.pokemon", this.pokemon);
  }

  getPokemon(): any {
    this.ngRedux.dispatch(this.actions.getPokemon());
  }
}
