import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../movies-lists/models/IPage";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @Input()
  film: IMovie;

  constructor() {
  }

  ngOnInit(): void {
  }

}
