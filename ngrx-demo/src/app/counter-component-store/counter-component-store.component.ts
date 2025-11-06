import { Component } from '@angular/core';
import { CounterStore } from './counter.store';

@Component({
  selector: 'app-counter-component-store',
  templateUrl: './counter-component-store.component.html',
  providers: [CounterStore],
})
export class CounterComponentStoreComponent {
  readonly count$ = this.counterStore.count$;

  constructor(private readonly counterStore: CounterStore) {}

  increment() {
    this.counterStore.increment();
  }

  decrement() {
    this.counterStore.decrement();
  }

  reset() {
    this.counterStore.reset();
  }
}
