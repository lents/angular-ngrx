import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter Old] Increment';
export const DECREMENT = '[Counter Old] Decrement';
export const RESET = '[Counter Old] Reset';

export class Increment implements Action {
  readonly type = INCREMENT;
}

export class Decrement implements Action {
  readonly type = DECREMENT;
}

export class Reset implements Action {
  readonly type = RESET;
}

export type CounterOldActions = Increment | Decrement | Reset;
