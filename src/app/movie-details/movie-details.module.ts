import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { SharedModule } from '../shared/shared.module';

const routes = [
  {
    path: '',
    component: MovieComponent
  }
];

@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MovieDetailsModule {}