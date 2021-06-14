export interface IMovieDetail {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average:string;
  genres:IGenres[];
}


export interface IGenres {
  id:number;
  name:string;
}
