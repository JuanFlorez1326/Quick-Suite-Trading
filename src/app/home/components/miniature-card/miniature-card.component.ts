import { Component, Input } from '@angular/core';
import { IMovies } from 'src/app/shared/interfaces/movies.interface';

@Component({
  selector: 'app-miniature-card',
  templateUrl: './miniature-card.component.html',
  styleUrls: ['./miniature-card.component.scss']
})
export class MiniatureCardComponent {

  @Input() public movies: IMovies[] = [];

  public moviesOnWatchlist: IMovies[] = [];

  constructor() {
    const storedMovies = localStorage.getItem('moviesOnWatchlist');
    this.moviesOnWatchlist = storedMovies ? JSON.parse(storedMovies) : [];
  }

  public addMovieToWatchlist(movie: IMovies): void {
    const movieExists = this.moviesOnWatchlist.some(existingMovie => existingMovie.id === movie.id);

    if (!movieExists) {
      this.moviesOnWatchlist.push(movie);
      localStorage.setItem('moviesOnWatchlist', JSON.stringify(this.moviesOnWatchlist));
    }
  }

  public removeMovieToWatchlist( movie: IMovies ) {
    this.moviesOnWatchlist = this.moviesOnWatchlist.filter(existingMovie => existingMovie.id !== movie.id);
    localStorage.setItem('moviesOnWatchlist', JSON.stringify(this.moviesOnWatchlist));
  }
  
  public isMovieInWatchlist(movie: IMovies): boolean {
    return this.moviesOnWatchlist.some(existingMovie => existingMovie.id === movie.id);
  }
}