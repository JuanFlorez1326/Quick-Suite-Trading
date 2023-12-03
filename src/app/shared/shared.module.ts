import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { MoviesWatchlistComponent } from './components/movies-watchlist/movies-watchlist.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MoviesWatchlistComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    HeaderComponent
  ]
})
export class SharedModule {}