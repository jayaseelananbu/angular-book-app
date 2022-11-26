import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../types/Books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  @Output() emitBookEvent = new EventEmitter<Book>();

  constructor() {}

  ngOnInit(): void {}

  handleBook() {
    this.emitBookEvent.emit(this.book);
  }
}
