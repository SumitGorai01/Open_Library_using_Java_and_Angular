import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrl: './view-books.component.css'
})
export class ViewBooksComponent implements OnInit{

  constructor (private _book:BookService){}


  books = [
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
  ]

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

  
  //delete book
  deleteBook(bookId:any){
    Swal.fire({
        icon:'info',
        title:'Are you sure?',
        confirmButtonText:'Delete',
        showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        this._book.deleteBook(bookId).subscribe(
          (data)=>{
           this.books= this.books.filter((book)=>book.bookId != bookId);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User Deleted Successfully !!",
              // showConfirmButton: false,
              timer: 2000
            });
          },
          (error) => {
            console.log(error);
            Swal.fire('Error !!', 'Server Error !!', 'error')
          }
        );
      }

    })
    // alert(userId);
  }



}
