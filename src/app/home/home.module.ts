import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MiniatureCardComponent } from './components/miniature-card/miniature-card.component';
import { MiniaturesListComponent } from './components/miniatures-list/miniatures-list.component';

const routes = [
  {
    path: '',
    component: MiniaturesListComponent
  }
];

@NgModule({
  declarations: [
    MiniatureCardComponent,
    MiniaturesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MiniatureCardComponent
  ]
})
export class HomeModule {}