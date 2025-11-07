import { Component, inject } from '@angular/core';
import { CounterSignalsStore } from './store/counter-signals.store';

@Component({
  selector: 'app-counter-signals',
  standalone: false,
  templateUrl: './counter-signals.component.html',
  providers: [CounterSignalsStore],
})
export class CounterSignalsComponent {
  private readonly store = inject(CounterSignalsStore);
  
  readonly count = this.store.count;

  increment() {
    this.store.increment();
  }

  decrement() {
    this.store.decrement();
  }

  reset() {
    this.store.reset();
  }
}
