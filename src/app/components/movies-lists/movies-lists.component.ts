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
  pagination = {
    page: 0,
    total: 0
  }

  constructor(private movieList: MovieListService, private dataTransfer: DataTransferService) {
    this.movieList.getMovies(1).subscribe(page => {
      this.dataTransfer.movies.next(page.results);
      this.dataTransfer.pagination.next({total: page.total_pages, page: 1})
    });
  }

  ngOnInit(): void {
    this.dataTransfer.movies.subscribe((movies,) => {
      this.films = movies;
    });

    this.dataTransfer.pagination.subscribe((pagination) => {
      this.pagination = pagination;
    })
  }

  back() {
    const pagination = this.dataTransfer.pagination.getValue();
    this.dataTransfer.pagination.next({page: pagination.page - 1, total: pagination.total})
  }

  next() {
    const {page, total} = this.dataTransfer.pagination.getValue();
    this.movieList.getMovies(page+1).subscribe(response => {
      this.dataTransfer.movies.next(response.results);
      this.dataTransfer.pagination.next({total: response.total_pages, page: page+1})
    });
  }
}
