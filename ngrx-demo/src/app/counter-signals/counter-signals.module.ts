import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CounterSignalsComponent } from './counter-signals.component';
import { counterSignalsFeature } from './store/counter-signals.store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CounterSignalsComponent,
    StoreModule.forFeature(counterSignalsFeature),
  ],
  exports: [CounterSignalsComponent],
})
export class CounterSignalsModule {}
