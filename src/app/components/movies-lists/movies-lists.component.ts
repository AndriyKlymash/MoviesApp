import {Component, OnInit} from '@angular/core';
import {MovieListService} from "./service/movie-list.service";
import {IMovie} from "./models/IPage";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-movies-lists',
  templateUrl: './movies-lists.component.html',
  styleUrls: ['./movies-lists.component.css']
})
export class MoviesListsComponent implements OnInit {

  films: IMovie[];

  constructor(private movieList: MovieListService, private dataTransfer: DataTransferService) {
    this.movieList.getMovies().subscribe(page => this.dataTransfer.movies.next(page.results));
  }

  ngOnInit(): void {
    this.dataTransfer.movies.subscribe((movies) => {
      this.films = movies;
    });
  }
}
