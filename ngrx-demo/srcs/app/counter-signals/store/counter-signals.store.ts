import {
  createAction,
  createFeature,
  createReducer,
  on,
} from '@ngrx/store';

export const increment = createAction('[Counter Signals] Increment');
export const decrement = createAction('[Counter Signals] Decrement');
export const reset = createAction('[Counter Signals] Reset');

export interface CounterSignalsState {
  count: number;
}

export const initialState: CounterSignalsState = {
  count: 0,
};

export const counterSignalsFeature = createFeature({
  name: 'counterSignals',
  reducer: createReducer(
    initialState,
    on(increment, (state) => ({ ...state, count: state.count + 1 })),
    on(decrement, (state) => ({ ...state, count: state.count - 1 })),
    on(reset, (state) => ({ ...state, count: 0 }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectCounterSignalsState, // feature selector
  selectCount, // selector for `count` property
} = counterSignalsFeature;
