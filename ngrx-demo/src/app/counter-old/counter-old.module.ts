import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterOldComponent } from './counter-old.component';

@NgModule({
  declarations: [CounterOldComponent],
  imports: [CommonModule],
  exports: [CounterOldComponent],
})
export class CounterOldModule {}
