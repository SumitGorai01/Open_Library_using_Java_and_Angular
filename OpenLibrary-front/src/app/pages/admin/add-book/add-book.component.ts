import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../../services/author.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})

export class AddBookComponent implements OnInit {
  // [x: string]: any;

  authors = [
    {
      authorId: '',
      authorName: '',
    }
  ];

  bookData = {
    bookName: '',
    publishDate : '',
    image: '',
    bookPdf: '',
    author: {
      authorId: '',
      authorName : ''
    },

  }

  constructor(private _author: AuthorService, private _snack: MatSnackBar, private _book: BookService) { }

  ngOnInit(): void {
    this._author.authors().subscribe(
      (data: any) => {
        // author load
        this.authors = data;
        console.log(this.authors);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'error in loading data from server', 'error');
      }
    );
  }
  
  //add-quiz form data
  addBook() {
    if (this.bookData.bookName.trim() == '' || this.bookData.bookName == null) {
      this._snack.open("Book Name is required !! ", "ok", {
        duration: 3000
      })
      return;
    }
    if (this.bookData.publishDate == '' || this.bookData.publishDate == null) {
      this._snack.open("Publish Date is required !! ", "ok", {
        duration: 3000
      })
      return;
    }
    if (this.bookData.image == '' || this.bookData.image == null) {
      this._snack.open("Image is required !! ", "ok", {
        duration: 3000
      })
      return;
    }
    if (this.bookData.bookPdf == '' || this.bookData.bookPdf == null) {
      this._snack.open("Book Pdf is required !! ", "ok", {
        duration: 3000
      })
      return;
    }

    console.log(this.bookData);


    //call serve
    this._book.addBook(this.bookData).subscribe(
      (data :any) => {
        this.bookData.bookName = '';
        this.bookData.publishDate = '';
        this.bookData.image = '';
        this.bookData.bookPdf = '';

        //success
        console.log(data);

        //alert on success
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Book Added Successfully !!",
          // showConfirmButton: false,
          timer: 2000
        });
      },
      (error: any) => {
        //error
        console.log(error);
        // alert('Something went wrong!!')
        Swal.fire({
          icon: "error",
          title: "Oops...Something went wrong!!",
          text: " Please try again !!",
          // footer: '<a href="#">Why do I have this issue?</a>'
        });
        this._snack.open("Something went wrong  !! Try Again !", 'ok', {
          duration: 3000
        })
      }
    )
  }


  
}