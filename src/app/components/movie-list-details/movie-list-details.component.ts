import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieListService} from "../movies-lists/service/movie-list.service";
import {IMovieDetail} from "./models/IMovieDetail";

@Component({
  selector: 'app-movie-list-details',
  templateUrl: './movie-list-details.component.html',
  styleUrls: ['./movie-list-details.component.css']
})
export class MovieListDetailsComponent implements OnInit {

  film: IMovieDetail;
  paginate: number=1;

  constructor(private movieListService: MovieListService, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.movieListService.getMovieDetails(params.id).subscribe(page => this.film = page);
    })
  }
}
