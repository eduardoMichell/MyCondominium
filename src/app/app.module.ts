import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from './views/home/home.component';
import { BlockCrudComponent } from './views/block-crud/block-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { BlockCreateComponent } from './components/blocks/block-create/block-create.component';
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule }from '@angular/common/http'

import { FormsModule }from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BlockReadComponent } from './components/blocks/block-read/block-read.component';
  import { MatTableModule } from '@angular/material/table';
  import { MatPaginatorModule } from '@angular/material/paginator';
  import { MatSortModule } from '@angular/material/sort';
import { BlockUpdateComponent } from './components/blocks/block-update/block-update.component';
import { BlockDeleteComponent } from './components/blocks/block-delete/block-delete.component';
import { PeopleCrudComponent} from "./views/people-crud/people-crud.component";
import { PeopleCreateComponent } from './components/peoples/people-create/people-create.component';
import { PeopleDeleteComponent } from './components/peoples/people-delete/people-delete.component';
import { PeopleReadComponent } from './components/peoples/people-read/people-read.component';
import { PeopleUpdateComponent } from './components/peoples/people-update/people-update.component';
import {MatSelectModule} from "@angular/material/select";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    BlockCrudComponent,
    RedDirective,
    ForDirective,
    BlockCreateComponent,
    BlockReadComponent,
    BlockUpdateComponent,
    BlockDeleteComponent,
    PeopleCrudComponent,
    PeopleCreateComponent,
    PeopleDeleteComponent,
    PeopleReadComponent,
    PeopleUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
