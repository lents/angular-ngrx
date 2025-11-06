import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterModernComponent } from './counter-modern.component';

@NgModule({
  declarations: [CounterModernComponent],
  imports: [CommonModule],
  exports: [CounterModernComponent],
})
export class CounterModernModule {}
