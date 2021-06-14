import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IMovie} from "../components/movies-lists/models/IPage";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  movies=new BehaviorSubject<IMovie[]>([])

  constructor() {
  }
}
