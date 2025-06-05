import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  constructor(private userService: UserService,private snack:MatSnackBar){}

  public user={
    username:'',
    password:'',
    name:'',
    email:'',
    phone:'',
  }

  ngOnInit():void{}

  formSubmit() {
    if (!this.user.username || !this.user.password || !this.user.name || !this.user.email || !this.user.phone) {
      this.snack.open("Please fill all required fields correctly.", "OK", {
        duration: 3000,
      });
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        this.user = { username: '', password: '', name: '', email: '', phone: '' };

        Swal.fire('Registration Successful!', 'Your User ID: ' + data.userId, 'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Oops...', 'Something went wrong!', 'error');
        this.snack.open('Something went wrong!', 'OK', { duration: 3000 });
      }
    );
  }


//this.user
 
}
