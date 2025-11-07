import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

interface CounterSignalsState {
  count: number;
}

const initialState: CounterSignalsState = {
  count: 0,
};

export const CounterSignalsStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    increment: () => patchState(store, (state) => ({ count: state.count + 1 })),
    decrement: () => patchState(store, (state) => ({ count: state.count - 1 })),
    reset: () => patchState(store, { count: 0 }),
  }))
);
