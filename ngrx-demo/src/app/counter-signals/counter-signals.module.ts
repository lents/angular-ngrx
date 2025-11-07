import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterSignalsComponent } from './counter-signals.component';

@NgModule({
  declarations: [CounterSignalsComponent],
  imports: [CommonModule],
  exports: [CounterSignalsComponent],
})
export class CounterSignalsModule {}
