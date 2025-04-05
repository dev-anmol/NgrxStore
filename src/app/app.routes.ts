import {Routes} from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/landing/landing.component').then((m) => m.LandingComponent)
  }, {
    path: 'counter',
    loadComponent: () => import('./components/counter/counter.component').then((m) => m.CounterComponent)
  }, {
    path: 'products',
    loadComponent: () => import('./components/product/product.component').then((m) => m.ProductComponent)
  }, {
    path: 'cart',
    loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent)
  }
];
