import { Component } from '@angular/core';
import { CardService } from '../../../home/services/card.service';

@Component({
  selector: 'app-movies-watchlist',
  templateUrl: './movies-watchlist.component.html'
})
export class MoviesWatchlistComponent {

  public watchlist = this.cardService.moviesOnWatchlist;
  
  constructor( private cardService: CardService ) {}
}