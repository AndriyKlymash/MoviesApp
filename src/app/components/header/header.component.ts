import {Component, OnInit} from '@angular/core';
import {MovieListService} from "../movies-lists/service/movie-list.service";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText: string;


  constructor(private movieList: MovieListService, private dataTransfer:DataTransferService) {
  }

  ngOnInit(): void {
    this.searchText = ''
  }

  search(myForm: HTMLFormElement) {
    console.log(myForm.searchText.value)
    this.movieList.getBySearch(myForm.searchText.value).subscribe(response => {
        this.dataTransfer.movies.next(response.results);
    })
  }
}
