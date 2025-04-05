import {AppState} from '../app.state';
import {createSelector} from '@ngrx/store';

//getting the whole counter state
export const selectCounterState = (state: AppState) => state.counter


//getting the count value from the whole counter state its like slicing some part from the whole state
//from a bigger data we only requires the count
export const selectCount = createSelector(
  selectCounterState, //this state has all the data and requiring only the required state/ related to counter
  (state) => state.count
)
