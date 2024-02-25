import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient) {}

  //add book
  public addBook(book: any) {
    return this._http.post(`${baseUrl}/book/`, book);
  }

  //show all books
  public showAllBooks() {
    return this._http.get(`${baseUrl}/book/`)
  }

  //delete book
  public deleteBook(bookId: any) {
    return this._http.delete(`${baseUrl}/book/${bookId}`)
  }

  //get the single book
  public getBook(bookId: any) {
    return this._http.get(`${baseUrl}/book/${bookId}`);
  }
  //update 
  public updateBook(book: any) {
    return this._http.put(`${baseUrl}/book/`, book);
  }
}
