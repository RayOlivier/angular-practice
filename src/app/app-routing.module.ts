import { AsyncComponentComponent } from "./async-component/async-component.component";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { PostsComponent } from "./posts/posts.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  { path: "", component: UsersComponent },
  { path: "posts", component: PostsComponent }, //note that these don't have a / at the front like react routes do
  { path: "details/:id", component: DetailsComponent },
  { path: "todo", component: ToDoListComponent },
  { path: "async", component: AsyncComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
