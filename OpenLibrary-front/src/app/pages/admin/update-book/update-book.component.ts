import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../../services/author.service';
import { BookService } from '../../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})

export class UpdateBookComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _book: BookService,
    private _author: AuthorService,
    // private _router:Router
  ) { }

  bookId = 0;
  book: any;
  authors: any;

  ngOnInit(): void {

    this.bookId = this._route.snapshot.params['bookId'];
    this._book.getBook(this.bookId).subscribe(
      (data: any) => {
        this.book = data;
        console.log(this.book);
      },
      (error: any) => {
        console.log(error);
      }
    );


    this._author.authors().subscribe(
      (data: any) => {
        this.authors = data;
      },
      (error) => {
        alert('error in loading data');
      }
    );
    // alert(this.quizId);
    // throw new Error('Method not implemented.');
  }

  //update form submit
  public updateData() {
    //   //validate 

    this._book.updateBook(this.book).subscribe(
      (data: any) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Book Updated Successfully !!",
          showConfirmButton: true,
          // timer: 2000
        }).then((e) => {
          alert('ok')
          // this._router.navigate(['/admin/book'])
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

        });
      }
    );
  }

}

