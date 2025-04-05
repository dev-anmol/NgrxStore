import {createSelector} from '@ngrx/store';
import {AppState} from '../app.state';

//selectors have basically slices from the whole app state
export const selectProductState = (state: AppState) => state.products

export const selectCartProducts = createSelector(
  selectProductState, //it is the selector. contains data related to product state and we can access the products state from this
  (state) => state.products //what you want to return
)
