import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIES } from 'src/app/shared/shared-movies';
import { CardService } from 'src/app/home/services/card.service';
import { IMovies } from 'src/app/shared/interfaces/movies.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  
  public movies: IMovies[] = MOVIES;
  public currentMovie!: IMovies;
  public movieId!: number;
  
  constructor (
    private route: ActivatedRoute,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = +params['id'];
      this.getMovie(this.movieId);
    });  
  }

  public getMovie(id: number): void {
    const currentMovie = this.movies.find(movie => movie.id === id);
    this.currentMovie = currentMovie!;
  }

  public addMovieToWatchlist( movie: IMovies ): void {
    this.cardService.addMovieToWatchlist(movie);
  }

  public removeMovieToWatchlist( movie: IMovies ): void {
    this.cardService.removeMovieToWatchlist(movie);
  }
  
  public isMovieInWatchlist(movie: IMovies): boolean {
    return this.cardService.isMovieInWatchlist(movie);
  }
}