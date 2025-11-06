import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCounterModern from './store/counter-modern.actions';
import { CounterModernState } from './store/counter-modern.reducer';

@Component({
  selector: 'app-counter-modern',
  templateUrl: './counter-modern.component.html',
})
export class CounterModernComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ counterModern: CounterModernState }>) {
    this.count$ = this.store.pipe(select((state) => state.counterModern.count));
  }

  increment() {
    this.store.dispatch(fromCounterModern.increment());
  }

  decrement() {
    this.store.dispatch(fromCounterModern.decrement());
  }

  reset() {
    this.store.dispatch(fromCounterModern.reset());
  }
}
