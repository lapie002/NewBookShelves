import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../models/book.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];
  bookSubscription: Subscription;

  constructor(private booksService: BooksService, private router: Router) {}

  ngOnInit() {
    this.bookSubscription = this.booksService.booksSubject.subscribe(
      (books: Books[]) => {
        this.books = books;
      }
    );
    this.booksService.emitBooks();
  }

  onNewBook() {
    this.router.navigate(['/books','new']);
  }

  onDeleteBook(book: Book) {
    this.booksService.removeBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

}
