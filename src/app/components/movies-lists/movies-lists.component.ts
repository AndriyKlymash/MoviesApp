import {Component, OnInit} from '@angular/core';
import {MovieListService} from "./service/movie-list.service";
import {IMovie} from "./models/IPage";

@Component({
  selector: 'app-movies-lists',
  templateUrl: './movies-lists.component.html',
  styleUrls: ['./movies-lists.component.css']
})
export class MoviesListsComponent implements OnInit {

  films:IMovie[];

  constructor(private movieList: MovieListService) {
  }

  ngOnInit(): void {
    this.movieList.getMovies().subscribe( page => this.films = page.results);
  }

}
