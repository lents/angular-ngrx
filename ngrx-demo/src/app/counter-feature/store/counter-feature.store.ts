import { createAction, createFeature, createReducer, on } from '@ngrx/store';

export const increment = createAction('[Counter Feature] Increment');
export const decrement = createAction('[Counter Feature] Decrement');
export const reset = createAction('[Counter Feature] Reset');

export interface CounterFeatureState {
  count: number;
}

export const initialState: CounterFeatureState = {
  count: 0,
};

export const counterFeature = createFeature({
  name: 'counterFeature',
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
  selectCounterFeatureState, // feature selector
  selectCount, // selector for `count` property
} = counterFeature;
