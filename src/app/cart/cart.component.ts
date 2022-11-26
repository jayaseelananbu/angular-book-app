import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Book } from '../types/Books';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(book: Book) {
    this.cartService.add(book);
  }
  getCart() {
    return this.cartService.get();
  }
}
