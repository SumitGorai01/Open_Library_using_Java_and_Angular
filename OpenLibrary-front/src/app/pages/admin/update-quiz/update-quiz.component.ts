import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';

import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrl: './update-quiz.component.css'
})
export class UpdateQuizComponent implements OnInit{
  
  constructor(
    private _route:ActivatedRoute , 
    private _quiz:QuizService ,
    private _category:CategoryService,
    private _router:Router){}
  
  quizId=0;
  quiz: any;
  categories:any;

  ngOnInit(): void {

    this.quizId = this._route.snapshot.params['quizId'];
    this._quiz.getQuiz(this.quizId).subscribe(
      (data:any)=>{   
        this.quiz=data;
        console.log(this.quiz);
      },
      (error)=>{
        console.log(error);
      }
    );


    this._category.categories().subscribe(
      (data:any)=>{
        this.categories =data;
      },
      (error)=>{
        alert('error in loading data');
      }
    );
    // alert(this.quizId);
    // throw new Error('Method not implemented.');
  }

  //update form submit
  public updateData(){
    //validate 

    this._quiz.updateQuiz(this.quiz).subscribe(
      (data)=>{
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Quiz Updated Successfully !!",
          showConfirmButton: true,
          // timer: 2000
        }).then((e)=>{
          this._router.navigate(['/admin/quizzes'])
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
