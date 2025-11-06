import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCounterOld from './store/counter-old.actions';
import { CounterOldState } from './store/counter-old.reducer';

@Component({
  selector: 'app-counter-old',
  templateUrl: './counter-old.component.html',
})
export class CounterOldComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ counterOld: CounterOldState }>) {
    this.count$ = this.store.pipe(select((state) => state.counterOld.count));
  }

  increment() {
    this.store.dispatch(new fromCounterOld.Increment());
  }

  decrement() {
    this.store.dispatch(new fromCounterOld.Decrement());
  }

  reset() {
    this.store.dispatch(new fromCounterOld.Reset());
  }
}
