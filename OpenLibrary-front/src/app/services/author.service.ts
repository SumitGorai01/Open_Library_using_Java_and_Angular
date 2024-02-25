import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private _http: HttpClient) {  }

 //add author
 public addAuthor(author:any){
     return this._http.post(`${baseUrl}/author/`,author);
 }

  //load authors
  public authors() {
    return this._http.get(`${baseUrl}/author/`);
  }

 //show all users
 public showAllAuthor(){
   return this._http.get(`${baseUrl}/author/`)
 }
 //delete user
 public deleteAuthor(authorId : any){
   return this._http.delete(`${baseUrl}/author/${authorId}`)
 }
}
