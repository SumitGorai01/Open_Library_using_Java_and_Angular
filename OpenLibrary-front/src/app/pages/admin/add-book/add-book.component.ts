import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../../services/author.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { BookService } from '../../../services/book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']  // Corrected this
})
export class AddBookComponent implements OnInit {

  authors = [
    {
      authorId: '',
      authorName: '',
    }
  ];

  bookData = {
    bookName: '',
    publishDate: '',
    author: {
      authorId: '',
      authorName: ''
    }
  }

  imageFile: File | null = null;
  pdfFile: File | null = null;

  constructor(
    private _author: AuthorService, 
    private _snack: MatSnackBar, 
    private _book: BookService,
    private http: HttpClient   // Inject HttpClient
  ) {}

  ngOnInit(): void {
    this._author.authors().subscribe(
      (data: any) => {
        this.authors = data;
        console.log(this.authors);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'error in loading data from server', 'error');
      }
    );
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;
    }
  }
  
  onPdfSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.pdfFile = file;
    }
  }
  
  addBook() {
    if (this.bookData.bookName.trim() === '' || this.bookData.publishDate.trim() === '' || !this.imageFile || !this.pdfFile) {
      this._snack.open('All fields and files are required !!', 'ok', { duration: 3000 });
      return;
    }

    const formData = new FormData();
    formData.append('book', new Blob([JSON.stringify(this.bookData)], { type: 'application/json' }));
    
    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }
    if (this.pdfFile) {
      formData.append('bookPdf', this.pdfFile);
    }

    this._book.addBook(formData).subscribe(
      (data: any) => {
        console.log(data);
        this.bookData = {
          bookName: '',
          publishDate: '',
          author: {
            authorId: '',
            authorName: ''
          }
        };
        this.imageFile = null;
        this.pdfFile = null;

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Book Added Successfully !!",
          timer: 2000
        });
      },
      (error: any) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...Something went wrong!!",
          text: " Please try again !!",
        });
        this._snack.open("Something went wrong  !! Try Again !", 'ok', {
          duration: 3000
        })
      }
    );
  }
}
