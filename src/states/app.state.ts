import {CounterState} from './counter/counter.reducer';
import {CartState} from './cart/cart.reducer';

//this is my store or global application state
//benefit of the ngrx -> once you update the state in one component it will also gets
//update on the another component where it is used, this is reactivity

export interface AppState {
  //write now we have only counter state in our application
  //there can be many states like carts, items etc... i.e. it can grow
  counter: CounterState
  products: CartState
}
