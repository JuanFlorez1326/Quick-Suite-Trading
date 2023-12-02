import { Injectable } from '@angular/core';
import { IMovies } from 'src/app/shared/interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public moviesOnWatchlist: IMovies[] = [];
  public storage: string = 'moviesOnWatchlist';

  constructor() {
    const storedMovies = localStorage.getItem(this.storage);
    this.moviesOnWatchlist = storedMovies ? JSON.parse(storedMovies) : [];
  }

  public addMovieToWatchlist(movie: IMovies): void {
    const movieExists = this.moviesOnWatchlist.some(existingMovie => existingMovie.id === movie.id);

    if (!movieExists) {
      this.moviesOnWatchlist.push(movie);
      localStorage.setItem(this.storage, JSON.stringify(this.moviesOnWatchlist));
    }
  }

  public removeMovieToWatchlist( movie: IMovies ): void {
    this.moviesOnWatchlist = this.moviesOnWatchlist.filter(existingMovie => existingMovie.id !== movie.id);
    localStorage.setItem(this.storage, JSON.stringify(this.moviesOnWatchlist));
  }
  
  public isMovieInWatchlist( movie: IMovies ): boolean {
    return this.moviesOnWatchlist.some(existingMovie => existingMovie.id === movie.id);
  }
}