import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import {CounterReducer} from '../states/counter/counter.reducer'
import {provideHttpClient, withFetch} from '@angular/common/http';
import {CartReducer} from '../states/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes),
    provideStore(),
    provideState({name: 'counter', reducer: CounterReducer}),
    provideState({name: 'products', reducer: CartReducer}),
    provideHttpClient(withFetch())
  ]
};
