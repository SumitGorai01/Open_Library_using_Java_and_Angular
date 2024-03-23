import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css'
})
export class AddQuestionComponent implements OnInit {


  // public Editor = ClassicEditor;

  qTitle:any;
  quizId: any;
  question = {
    quiz:{
      quizId:'',
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  };
  constructor(private _route:ActivatedRoute,
    private _question:QuestionService
    ){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.quizId = this._route.snapshot.params['quizId'];
    this.qTitle = this._route.snapshot.params['title']
    console.log(this.quizId);
    // this.question.quiz['quizId'] = this.quizId;
    this.question.quiz.quizId = this.quizId;

  }

  formSubmit(){
    //alert("ok");
    if(this.question.content.trim()=='' || this.question.content ==null)
    {
      return;
    }
    if(this.question.option1.trim()=='' || this.question.option1 ==null)
    {
      return;
    }
    if(this.question.option2.trim()=='' || this.question.option2 ==null)
    {
      return;
    }
    if(this.question.option3.trim()=='' || this.question.option3 ==null)
    {
      return;
    }
    if(this.question.option4.trim()=='' || this.question.option4 ==null)
    {
      return;
    }
    if(this.question.answer.trim()=='' || this.question.answer ==null)
    {
      return;
    }

    //form submit
    this._question.addQuestion(this.question).subscribe(
      (data:any)=>{
        console.log(data)
        Swal.fire('Success','Question Added Successfully','success');
        this.question.content='';
        this.question.option1='';
        this.question.option2='';
        this.question.option3='';
        this.question.option4='';
        this.question.answer='';
      },
      (error)=>{
        Swal.fire('Error', ' Error in Adding Question','error');
      }
    )
  }
}
