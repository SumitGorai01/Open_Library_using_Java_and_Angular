import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthorService } from '../../../services/author.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.css'
})

export class AddAuthorComponent implements OnInit {
  // [x: string]: any;

  authorData = {
    authorName: '',
  }

  constructor(private _author: AuthorService, private _snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  //add-quiz form data
  addAuthor() {
    if (this.authorData.authorName == '' || this.authorData.authorName == null) {
      this._snack.open("Author Name is required !! ", "ok", {
        duration: 3000
      })
      return;
    }
    console.log(this.authorData);


    //call serve
    this._author.addAuthor(this.authorData).subscribe(
      (data: any) => {
        this.authorData.authorName = '';

        //success
        console.log(data);

        //alert on success
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Author Added Successfully !!",
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