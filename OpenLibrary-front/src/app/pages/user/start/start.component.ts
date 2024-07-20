import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { error } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent implements OnInit {

  quizId: any;
  questions: any;

  marksGot = 0;
  correctAnswer = 0;
  attempted = 0;
  isSubmit=false;

  timer:any;

  constructor(
    private _locationSt: LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionService
  ) { }
  ngOnInit(): void {
    this.preventBackButton();
    this.quizId = this._route.snapshot.params['quizId'];
    console.log(this.quizId);
    this.loadQuestions();
    // throw new Error('Method not implemented.');
  }
  loadQuestions() {
    this._question.getQuestionsOfQuizForTest(this.quizId).subscribe(
      (data : any) => {
        console.log(data);
        this.questions = data;

        this.timer=this.questions.length*2*60;
        this.questions.forEach((q:any) => {
          q['givenAnswer']='';
        });

        console.log(this.questions);
        this.startTimer();
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error in loading questions of quiz', 'error')
      }
    )
    // throw new Error('Method not implemented.');
  }

  preventBackButton() {
    history.pushState(null, location.href);
    this._locationSt.onPopState(() => {
      history.pushState(null, location.href);
    });
  }

  submitQuiz(){
    Swal.fire({
      title: "Do you want to submit the quiz?",      
      showCancelButton: true,
      confirmButtonText: "Submit",
      icon:'info'
    }).then((result) => {
      
      if (result.isConfirmed) {
       this.evalQuiz();
      } 
    });
  }

  //timer
  startTimer(){
   let t= window.setInterval(()=>{
      //code run in every second
      if(this.timer<=0){
        this.evalQuiz()
        clearInterval(t);
      }else{
        this.timer--;
      }
    },1000)
  }
  getFormattedTime(){
    let mm=Math.floor(this.timer/60);
    let ss = this.timer-mm*60;
    return `${mm} min : ${ss} sec`;
  }

  evalQuiz(){
    this.isSubmit=true;
    this.questions.forEach((q:any)=>{
      if(q.givenAnswer == q.answer){
        this.correctAnswer++;
       let marksSingle = this.questions[0].quiz.maxMarks/this.questions.length;
       this.marksGot+=marksSingle;
      }

      if(q.givenAnswer.trim() !=''){
        this.attempted++;
      }
    });
    console.log("Correct Answer :"+this.correctAnswer)
    console.log("MArks got :"+this.marksGot)
    console.log("Attempted:"+this.attempted)


  }
}
