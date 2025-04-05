import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AsyncPipe, CommonModule} from '@angular/common';
import {Observable} from 'rxjs';
import {ProductCardComponent} from '../../../shared/components/product-card/product-card.component';
import {ProductApiService} from '../../../shared/services/product-api.service';
import {IProduct} from '../../../shared/models/product.interface';
import {AppState} from '../../../states/app.state';
import {Store} from '@ngrx/store';
import {addToCart} from '../../../states/cart/cart.action';

@Component({
  selector: 'app-product',
  imports: [AsyncPipe, CommonModule, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  http = inject(HttpClient);
  productApi = inject(ProductApiService);
  products$ = this.productApi.getProducts() as Observable<any[]>;
  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
  }

  addItemToCart(product: IProduct) {
    console.log("here")
    this.store.dispatch(addToCart({product}));
  }
}
