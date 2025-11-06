import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterSignalsFeature, increment, decrement, reset } from './store/counter-signals.store';
import { withSignals } from '@ngrx/signals';

@Component({
  selector: 'app-counter-signals',
  templateUrl: './counter-signals.component.html',
  standalone: true,
  imports: [],
})
export class CounterSignalsComponent extends withSignals(Store) {
  readonly count = this.selectSignal(counterSignalsFeature.selectCount);

  increment() {
    this.dispatch(increment());
  }

  decrement() {
    this.dispatch(decrement());
  }

  reset() {
    this.dispatch(reset());
  }
}
