import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks() {
    let books = [
      {
        name: 'Clean code',
        author: 'Robert C. Matin',
        image:
          'https://th.bing.com/th/id/OIP.xDBG3sSH9LqCyuHLt_ESggHaJy?w=130&h=180&c=7&r=0&o=5&pid=1.7',
        amount: 700,
      },
      {
        name: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        image:
          'https://m.media-amazon.com/images/I/4163oCmhq+L._SX425_BO1,204,203,200_.jpg',
        amount: 800,
      },
      {
        name: 'Art of Computer Programming',
        author: 'Donald John Fuller',
        image:
          'https://m.media-amazon.com/images/I/410vJZbAZGS._SY393_BO1,204,203,200_.jpg',
        amount: 900,
      },
      {
        name: 'Introduction to the Design and Analysis of Algorithms',
        author: 'Anany Levitin',
        image:
          'https://m.media-amazon.com/images/I/51T300XLDpL._SX369_BO1,204,203,200_.jpg',
        amount: 1800,
      },
    ];
    return books
  }
}
