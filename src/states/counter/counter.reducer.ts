import {createReducer, on} from '@ngrx/store'
import {decrement, increment, reset} from './counter.actions';


export interface CounterState {
  count: number
}


export const initialCounterState: CounterState = {
  count: 0
}

export const CounterReducer = createReducer(
    initialCounterState,
    on(increment, state => ({...state, count: state.count + 1 })), //based upon prev state increment the state
    on(decrement, state => ({...state, count: state.count - 1 })),
    on(reset, state => ({...state, count: 0}))
  )
