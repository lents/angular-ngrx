import { Action } from '@ngrx/store';
import * as fromCounterOld from './counter-old.actions';

export interface CounterOldState {
  count: number;
}

export const initialState: CounterOldState = {
  count: 0,
};

export function counterOldReducer(
  state = initialState,
  action: Action
): CounterOldState {
  switch (action.type) {
    case fromCounterOld.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case fromCounterOld.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case fromCounterOld.RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
}
