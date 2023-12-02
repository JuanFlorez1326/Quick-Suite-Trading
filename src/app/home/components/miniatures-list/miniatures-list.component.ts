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

  public orderByTitle(): void {
    this.movies.sort((a, b) => a.title.localeCompare(b.title));
  }

  public orderByDate(): void {
    this.movies.sort((a, b) => a.releasedDate.localeCompare(b.releasedDate));
  }
}