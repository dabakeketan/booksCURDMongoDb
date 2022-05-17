import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { OrderBy } from './order.pipe';
import { BookListComponent } from './features/books/book-list/book-list/book-list.component';
import { HeaderComponent } from './features/layout/header/header/header.component';
import { routing } from './app.routing';
import { BooksService } from './features/books/services/books.service';
import { BaseService } from './base.service';
import { FormsModule } from '@angular/forms';
import { AddBookComponent } from './features/books/add-book/add-book.component';
import { BookDetailsComponent } from './features/books/book-details/book-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent, OrderBy, BookListComponent, HeaderComponent, AddBookComponent, BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  exports: [OrderBy],
  providers: [BaseService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
