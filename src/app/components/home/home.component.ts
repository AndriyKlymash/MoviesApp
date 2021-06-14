import {Component, OnInit} from '@angular/core';
import {MovieListService} from "../movies-lists/service/movie-list.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private movieListService: MovieListService) {
  }

  ngOnInit(): void {
  }
}
