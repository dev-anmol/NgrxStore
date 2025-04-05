import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../states/app.state';
import {Observable} from 'rxjs';
import {selectCartProducts} from '../../../states/cart/cart.selector';
import {IProduct} from '../../models/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit{
  @Input() product!:any;
  @Output() handleAdd = new EventEmitter();
  products$!: Observable<IProduct[]>;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(selectCartProducts);
  }

  ngOnInit() {
    console.log(this.product);
  }

  addToCart(product: IProduct) {
    console.log(product);
    this.handleAdd.emit(product);
  }
}
