import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [
    MaterialModule,
    HeaderComponent
  ]
})
export class SharedModule {}