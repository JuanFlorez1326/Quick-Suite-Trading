import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniaturesListComponent } from './components/miniatures-list/miniatures-list.component';
import { MiniatureCardComponent } from './components/miniature-card/miniature-card.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: MiniaturesListComponent
  }
];

@NgModule({
  declarations: [
    MiniaturesListComponent,
    MiniatureCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {}