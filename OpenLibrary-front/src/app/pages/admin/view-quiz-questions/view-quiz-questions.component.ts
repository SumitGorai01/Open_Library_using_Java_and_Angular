import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { error } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrl: './view-quiz-questions.component.css'
})
export class ViewQuizQuestionsComponent implements OnInit{

  quizId: any;
  qTitle: any;
  questions= [ {
    quesId:'',
    content:'',
    image:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''

  }
  ];
  constructor(private _route:ActivatedRoute,
    private _question:QuestionService){}

  ngOnInit(): void {
    this.quizId=this._route.snapshot.params['quizId'];
    this.qTitle=this._route.snapshot.params['title'];
    // throw new Error('Method not implemented.');
    // console.log(this.quizId);
    // console.log(this.qTitle);

    this._question.getQuestionsOfQuiz(this.quizId).subscribe(
      (data:any)=>{
        console.log(data);
        this.questions=data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

//deletequestion
deleteQuestion(questionId : any){
  Swal.fire({
    icon:'info',
    title:'Are you sure?',
    confirmButtonText:'Delete',
    showCancelButton:true,
}).then((result)=>{
  if(result.isConfirmed){
    this._question.deleteQuestion(questionId).subscribe(
      (data)=>{
       this.questions= this.questions.filter((question)=>question.quesId != questionId);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Question Deleted Successfully !!",
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
}

}
