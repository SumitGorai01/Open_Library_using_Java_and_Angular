import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { ViewBooksComponent } from '../../../pages/admin/view-books/view-books.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-commics-book',
  templateUrl: './commics-book.component.html',
  styleUrl: './commics-book.component.css'
})
export class CommicsBookComponent implements OnInit{

  constructor(private _book : BookService){}
  // constructor(){}

  
  books = 
    {
      bookId : '',
      bookName : '',
      author:{
        authorId :'',
        authorName:''
      },
      publishDate : '',
      image : '',
      bookPdf : ''
    }
  
  ngOnInit(): void {

    this._book.showAllBooks().subscribe(
      (data: any) => {
        //css
        this.books = data;
        console.log(this.books);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error')
      }
    );

    // throw new Error('Method not implemented.');
  }

}
