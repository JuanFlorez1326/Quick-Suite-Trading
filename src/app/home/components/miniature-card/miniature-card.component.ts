import { Component, Input } from '@angular/core';
import { CardService } from '../../services/card.service';
import { IMovies } from 'src/app/shared/interfaces/movies.interface';

@Component({
  selector: 'app-miniature-card',
  templateUrl: './miniature-card.component.html',
  styleUrls: ['./miniature-card.component.scss']
})
export class MiniatureCardComponent {

  @Input() public movies: IMovies[] = [];

  constructor( 
    private cardService: CardService 
  ) {}

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