export interface IPage {
  id: number;
  total_pages:number;
  results: IMovie[];
}

export interface IMovie {
  id:number;
  original_title:string;
  overview:string;
  popularity:string;
  poster_path:string;
  release_date:string;
  title:string;
}
