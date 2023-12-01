import { Component } from '@angular/core';
import { IMovies } from 'src/app/shared/interfaces/movies.interface';
import { MOVIES } from 'src/app/shared/shared-movies';

@Component({
  selector: 'app-miniatures-list',
  templateUrl: './miniatures-list.component.html',
  styleUrls: ['./miniatures-list.component.scss']
})
export class MiniaturesListComponent {

  public movies: IMovies[] = MOVIES;

  constructor() {
    console.log(this.movies);
  }
}