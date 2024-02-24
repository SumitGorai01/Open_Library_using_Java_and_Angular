import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.css'
})
export class ViewUsersComponent implements OnInit {

  users = [
    {
      userId: '',
      username: '',
      password: '',
      name: '',
      email: '',
      phone: '',
      profile: '',
      userRoles: ''
    },
  ]

  constructor(private _user: UserService) { }

  ngOnInit(): void {
    this._user.showAllUsers().subscribe(
      (data: any) => {
        //css
        this.users = data;
        console.log(this.users);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error')
      }
    );
    // throw new Error('Method not implemented.');
  }

  
  //delete user
  deleteUser(userId:any){
    Swal.fire({
        icon:'info',
        title:'Are you sure?',
        confirmButtonText:'Delete',
        showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        this._user.deleteUser(userId).subscribe(
          (data)=>{
           this.users= this.users.filter((user)=>user.userId != userId);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User Deleted Successfully !!",
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
    // alert(userId);
  }

}
