import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MOVIES } from 'src/app/shared/shared-movies';
import { IMovies } from 'src/app/shared/interfaces/movies.interface';
import { MoviesWatchlistComponent } from 'src/app/shared/components/movies-watchlist/movies-watchlist.component';

@Component({
  selector: 'app-miniatures-list',
  templateUrl: './miniatures-list.component.html',
  styleUrls: ['./miniatures-list.component.scss']
})
export class MiniaturesListComponent {

  constructor(
    public dialog: MatDialog
  ) { }

  public movies: IMovies[] = MOVIES;

  public orderByTitle(): void {
    this.movies.sort((a, b) => a.title.localeCompare(b.title));
  }

  public orderByDate(): void {
    this.movies.sort((a, b) => a.releasedDate.localeCompare(b.releasedDate));
  }

  public openDialogWatchList(){
    this.dialog.open(MoviesWatchlistComponent, {
      width: '600px'
    });
  }
}