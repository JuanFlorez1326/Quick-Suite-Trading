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
  public currentMovie!: IMovies;
  
  constructor (
    private route: ActivatedRoute
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
    console.log(this.currentMovie);
  }
}
