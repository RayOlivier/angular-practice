import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { PostsComponent } from "./posts/posts.component";
import { UsersComponent } from "./users/users.component";
import { DetailsComponent } from "./details/details.component";

import { HttpClientModule } from "@angular/common/http";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";

import { NgReduxModule, NgRedux } from "@angular-redux/store"; // <- New
import { IAppState, rootReducer, INITIAL_STATE } from "./../store";
import { ToDoListActions } from "./app.actions";
import thunk from "redux-thunk";
import { AsyncComponentComponent } from "./async-component/async-component.component";

import { store } from "../store";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    ToDoListComponent,
    AsyncComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [ToDoListActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
    // Tell @angular-redux/store about our rootReducer and our initial state.
    // It will use this to create a redux store for us and wire up all the
    // events.
    // ngRedux.configureStore(store, INITIAL_STATE);
  }
}
