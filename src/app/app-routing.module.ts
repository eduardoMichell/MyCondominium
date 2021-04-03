import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import { BlockCrudComponent } from "./views/block-crud/block-crud.component";
import { BlockCreateComponent } from "./components/blocks/block-create/block-create.component";
import { BlockUpdateComponent } from "./components/blocks/block-update/block-update.component";
import { BlockDeleteComponent } from "./components/blocks/block-delete/block-delete.component";
import { PeopleCrudComponent } from "./views/people-crud/people-crud.component";
import { PeopleCreateComponent } from "./components/peoples/people-create/people-create.component";
import { PeopleUpdateComponent } from "./components/peoples/people-update/people-update.component";
import { PeopleDeleteComponent } from "./components/peoples/people-delete/people-delete.component";

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "blocks",
  component: BlockCrudComponent
},{
  path: "blocks/create",
  component: BlockCreateComponent
},{
  path: "blocks/update/:id",
  component: BlockUpdateComponent
},{
  path: "blocks/delete/:id",
  component: BlockDeleteComponent
},{
  path: "peoples",
  component: PeopleCrudComponent
},{
  path: "peoples/create",
  component: PeopleCreateComponent
},{
  path: "peoples/update/:id",
  component: PeopleUpdateComponent
},{
  path: "peoples/delete/:id",
  component: PeopleDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
