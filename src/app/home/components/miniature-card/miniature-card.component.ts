import { Component, Input } from '@angular/core';
import { IMovies } from 'src/app/shared/interfaces/movies.interface';

@Component({
  selector: 'app-miniature-card',
  templateUrl: './miniature-card.component.html',
  styleUrls: ['./miniature-card.component.scss']
})
export class MiniatureCardComponent {

  @Input() public movies: IMovies[] = [];

  goToMovie( movie: IMovies ): void {
    console.log(movie);
  }
}