import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from '../../../services/quiz.service';


@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.css'
})
export class AddQuizComponent implements OnInit {
  // [x: string]: any;

  categories = [
    {
      categoryId: '',
      title: '',
    }
  ];

  quizData = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: {
      categoryId: ''
    },

  }

  constructor(private _cat: CategoryService, private _snack: MatSnackBar, private _quiz: QuizService) { }

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data: any) => {
        // category load

        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'error in loading data from server', 'error');
      }
    );

  }


  
  //add-quiz form data
  addQuiz() {
    if (this.quizData.title.trim() == '' || this.quizData.title == null) {
      this._snack.open("Title is required !! ", "ok", {
        duration: 3000
      })
      return;
    }
    if (this.quizData.title.trim() == '' || this.quizData.title == null) {
      this._snack.open("Title is required !! ", "ok", {
        duration: 3000
      })
      return;
    }
    if (this.quizData.description.trim() == '' || this.quizData.description == null) {
      this._snack.open("Description is required !! ", "ok", {
        duration: 3000
      })
      return;
    }
    if (this.quizData.maxMarks.trim() == '' || this.quizData.maxMarks == null) {
      this._snack.open("Max Marks is required !! ", "ok", {
        duration: 3000
      })
      return;
    }
    if (this.quizData.numberOfQuestions.trim() == '' || this.quizData.numberOfQuestions == null) {
      this._snack.open("No. of Questions is required !! ", "ok", {
        duration: 3000
      })
      return;
    }

    console.log(this.quizData);


    //call serve
    this._quiz.addQuiz(this.quizData).subscribe(
      (data) => {
        this.quizData.title = '';
        this.quizData.description = '';
        this.quizData.maxMarks = '';
        this.quizData.numberOfQuestions = '';

        //success
        console.log(data);

        //alert on success
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Quiz Added Successfully !!",
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