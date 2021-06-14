import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPage} from "../models/IPage";
import {IMovieDetail} from "../../movie-list-details/models/IMovieDetail";

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  private url = 'https://api.themoviedb.org/3/movie/popular?api_key=319e5b95a82b339390082cbcb3810de0&language=en-US&page='

  constructor(private httpClient: HttpClient) {
  }

  getMovies(page:number): Observable<IPage> {
    return this.httpClient.get<IPage>(this.url+page)
  }

  getMovieDetails(id: string): Observable<IMovieDetail> {
    return this.httpClient.get<IMovieDetail>(`https://api.themoviedb.org/3/movie/${id}?api_key=319e5b95a82b339390082cbcb3810de0&language=en-US`);
  }

  getBySearch(searchText:string):Observable<IPage>{
    return this.httpClient.get<IPage>('https://api.themoviedb.org/3/search/movie?query='+searchText+'&api_key=319e5b95a82b339390082cbcb3810de0')
  }
}
