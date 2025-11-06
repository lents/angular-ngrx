import { createReducer, on } from '@ngrx/store';
import * as CounterModernActions from './counter-modern.actions';

export interface CounterModernState {
  count: number;
}

export const initialState: CounterModernState = {
  count: 0,
};

export const counterModernReducer = createReducer(
  initialState,
  on(CounterModernActions.increment, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(CounterModernActions.decrement, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(CounterModernActions.reset, (state) => ({ ...state, count: 0 }))
);
