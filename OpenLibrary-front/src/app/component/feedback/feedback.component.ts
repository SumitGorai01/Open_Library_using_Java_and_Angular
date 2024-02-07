import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit{

  
  isLoggedIn = false;
  user=null;

  constructor(public login : LoginService){}
  
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
}
