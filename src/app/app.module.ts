import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from './components/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {MoviesListsComponent} from './components/movies-lists/movies-lists.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MovieListDetailsComponent} from './components/movie-list-details/movie-list-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';


let routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'moviesList', component: MoviesListsComponent},
  {path: 'moviesList/:id', component:MovieListDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListsComponent,
    MoviesListComponent,
    MovieListDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
