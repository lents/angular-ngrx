import { Component } from '@angular/core';
import { CounterStore } from './counter.store';

@Component({
  selector: 'app-counter-component-store',
  standalone: false,
  templateUrl: './counter-component-store.component.html',
  providers: [CounterStore],
})
export class CounterComponentStoreComponent {
  readonly count$;

  constructor(private readonly counterStore: CounterStore) {
    this.count$ = this.counterStore.count$;
  }

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
