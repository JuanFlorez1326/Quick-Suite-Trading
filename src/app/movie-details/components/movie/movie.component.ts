import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIES } from 'src/app/shared/shared-movies';
import { IMovies } from 'src/app/shared/interfaces/movies.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  
  public movies: IMovies[] = MOVIES;
  public movieId!: number;
  
  constructor (
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = +params['id'];
      this.getMovie(this.movieId);
    });  
  }

  public getMovie(id: number): IMovies | undefined {
    const currentMovie = this.movies.find(movie => movie.id === id);
    console.log(currentMovie);
    return currentMovie;
  }
}
