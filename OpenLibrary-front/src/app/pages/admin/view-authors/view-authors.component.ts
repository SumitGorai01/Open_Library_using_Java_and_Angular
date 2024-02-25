import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../../services/author.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-authors',
  templateUrl: './view-authors.component.html',
  styleUrl: './view-authors.component.css'
})
export class ViewAuthorsComponent implements OnInit {

  constructor(private _author: AuthorService) { }


  authors = [
    {
      authorId: '',
      authorName: '',
      books: {
        bookId : '',
        bookName: '',
      }
    }
  ]

  ngOnInit(): void {
    this._author.showAllAuthor().subscribe(
      (data: any) => {
        //css
        this.authors = data;
        console.log(this.authors);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error')
      }
    );
    // throw new Error('Method not implemented.');
  }

  //delete book
  deleteAuthor(authorId: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this._author.deleteAuthor(authorId).subscribe(
          (data) => {
            this.authors = this.authors.filter((author) => author.authorId != authorId);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Author Deleted Successfully !!",
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