import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { EmailService } from '../../services/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit{

  
  isLoggedIn = false;
  user=null;

  constructor(public login : LoginService,private emailService: EmailService,private _snack: MatSnackBar){}
  
  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoginIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>
    {
      this.isLoggedIn=this.login.isLoginIn();
      this.user=this.login.getUser();
    });
    // throw new Error('Method not implemented.');
  }


  onSubmitFeedback(emailForm: any) {
  
    const emailData = {
      email: emailForm.value.email,
      message: emailForm.value.message
    };
    if(emailData.email != '' && emailData.message != ''){      
      this.emailService.sendEmail(emailData);
    }else{
      this._snack.open("Input field is required !! ", "ok", {
        duration: 3000
      })
      return;
    }
  }
}
