import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

export interface BookModel {
  title: String;
  author: String;
  price: Number;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit, OnDestroy, AfterViewInit {

  books = [];

  dataSource;

  displayedColumns: string[];

  destroySubscription = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private booksService: BooksService, private router: Router) {
  }

  ngOnInit() {
    this.displayedColumns = ['title', 'author', 'price', 'action'];
    this.booksService.booksDataSubject.takeWhile(() => !this.destroySubscription).subscribe((response: any) => {
      if (response) {
        this.dataSource = new MatTableDataSource(response);
        console.log(this.books);
        this.dataSource.paginator = this.paginator;
      }
    });

    this.getBooks();
  }

  ngAfterViewInit() {
    //  this.dataSource.paginator = this.paginator;
  }

  getBooks() {
    // console.log(this.book);
    this.booksService.getBooks();
  }

  editDetails(book) {
    console.log(book._id);
    this.router.navigate(['/book', book._id]);
  }

  deleteBook(book) {
    console.log(book);
    if (confirm('Are you sure to delete entry for book ' + book.title)) {
      this.booksService.deleteBook(book);
    }
  }

  ngOnDestroy() {
    this.destroySubscription = true;
  }


}
