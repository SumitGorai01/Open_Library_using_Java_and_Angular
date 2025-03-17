import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private emailService: EmailService,private _snack: MatSnackBar) {}

  contact = {
    name: '',
    email: '',
    message: ''
  };
  onSubmit(emailForm: any) {
  
    const emailData = {
      name: emailForm.value.name,
      email: emailForm.value.email,
      message: emailForm.value.message
    };
    if(emailData.name != '' && emailData.email != '' && emailData.message != ''){      
      this.emailService.sendEmail(emailData);
    }else{
      this._snack.open("Input field is required !! ", "ok", {
        duration: 3000
      })
    }
  }
}
