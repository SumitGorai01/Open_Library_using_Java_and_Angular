import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { error } from 'console';
import Swal from 'sweetalert2';
import { data } from 'jquery';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrl: './view-quizzes.component.css'
})
export class ViewQuizzesComponent implements OnInit {
[x: string]: any;
  
  quizzes=[
    {
      quizId:'',
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestions:'',
      active:'',
      category:{
        title:''
      },
    },
  ];
 

  constructor(private _quiz:QuizService){}
  
  ngOnInit(): void {

    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error')
      }
    );
    
    // throw new Error('Method not implemented.');
  }


  //delete quiz
  deleteQuiz(quizId:any){
    Swal.fire({
        icon:'info',
        title:'Are you sure?',
        confirmButtonText:'Delete',
        showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        this._quiz.deleteQuiz(quizId).subscribe(
          (data)=>{
           this.quizzes= this.quizzes.filter((quiz)=>quiz.quizId != quizId);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Quiz Deleted Successfully !!",
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
    // alert(quizId);
  }
}
