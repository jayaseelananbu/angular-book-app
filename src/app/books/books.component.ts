import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Books';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  Books: Book[] = [];

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.Books = this.bookService.getBooks();
  }

  isShowing: boolean = true;
}
