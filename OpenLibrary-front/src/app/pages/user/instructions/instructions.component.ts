import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { error } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css'
})
export class InstructionsComponent implements OnInit{

  quizId:any;
  quiz:any;

  constructor(private _route:ActivatedRoute,
    private _quiz:QuizService,
    private _router: Router){}

  ngOnInit(): void {
    this.quizId = this._route.snapshot.params['quizId'];
    console.log(this.quizId)

    this._quiz.getQuiz(this.quizId).subscribe(
      (data)=>{
        console.log(data);
        this.quiz=data;
      },
      (error) => {
        console.log(error)
        Swal.fire('Error', 'Error on loading quiz from server', 'error')
      }
    )
    // throw new Error('Method not implemented.');
  };

  startQuiz(){
    Swal.fire({
      title: "Do you want to Start the quiz?",
      
      showCancelButton: true,
      confirmButtonText: "Start",
      icon:'info'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._router.navigate(['/start/'+this.quizId]);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    
  }

}
