import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {CounterComponent} from './components/counter/counter.component';
import {ProductComponent} from './components/product/product.component';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrxstoredemo';
}
