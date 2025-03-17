import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

declare var Email: any;

// let Email :any;
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private smtpConfig = {
    Host: "smtp.elasticemail.com",
    Username: "goraisumit01@gmail.com",
    Password: "68F730BD7F008A0DC76C37C5F363DCDA6B71",
    To: 'goraisumit01@gmail.com',
    From: 'goraisumit01@gmail.com',
    Subject: "Message From Open Library"
  };

  constructor() { }

  sendEmail(emailData: any) {
    const emailBody = {
      ...this.smtpConfig,
      Body: `Name : ${emailData.name}<br> Email : ${emailData.email}<br>  Message : ${emailData.message}`
    };

    return Email.send(emailBody).then((message: string) => {
      if (message === 'OK') {
        Swal.fire({
          title: "Success",
          text: "Message Sent Successfully",
          icon: "success",
          showConfirmButton: true,
          timer: 3000
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          showConfirmButton: false,
          timer: 3000
        });
      }
    });
  }

  sendFeedback(emailData: any) {
    const emailBody = {
      ...this.smtpConfig,
      Body: `Email : ${emailData.email}<br>  Feedback : ${emailData.message}`
    };

    return Email.send(emailBody).then((message: string) => {
      if (message === 'OK') {
        Swal.fire({
          title: "Success",
          text: "Feedback Sent Successfully",
          icon: "success",
          showConfirmButton: true,
          timer: 3000
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          showConfirmButton: false,
          timer: 3000
        });
      }
    });
  }
}
