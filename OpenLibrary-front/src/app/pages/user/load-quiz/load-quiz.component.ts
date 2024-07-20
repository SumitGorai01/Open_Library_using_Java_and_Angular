import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { error } from 'console';
import Swal from 'sweetalert2';
import { param } from 'jquery';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrl: './load-quiz.component.css'
})
export class LoadQuizComponent implements OnInit {


  catId: any;
  quizzes: any;
  constructor(
    private _route: ActivatedRoute,
    private _quiz: QuizService
  ) { }

  ngOnInit(): void {
    //  this.catId = this._route.snapshot.params['catId'];
    

    this._route.params.subscribe((params) => {
      this.catId = params['catId'];
      console.log(this.catId)
      if (this.catId == null) {
        console.log('load all quiz ')

        this._quiz.getActiveQuizzes().subscribe(
          (data) => {
            this.quizzes = data;
            console.log(this.quizzes)
          },
          (error) => {
            console.log(error)
            Swal.fire('Error', 'Error on loading quiz from server', 'error')
          }
        )
      } else {
        console.log('load specific qiuz')
        // this.quizzes=[];

        this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe(
          (data)=>{
            this.quizzes=data;
          },
          (error) => {
            console.log(error)
            Swal.fire('Error', 'Error on loading quiz from server', 'error')
          }
        )
      }
    })


    // throw new Error('Method not implemented.');
  }

}
