import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  isInCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(book: Book) {
    this.cartService.add(book);
    this.isInCart = true;
  }
  removeFromCart(book: Book) {
    this.cartService.remove(book);
    this.isInCart = false
  }
}
