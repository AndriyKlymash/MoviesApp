import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IMovie} from "../components/movies-lists/models/IPage";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  movies = new BehaviorSubject<IMovie[]>([])
  pagination = new BehaviorSubject({
    page:1,
    total:0
  })


  constructor() {
  }
}
