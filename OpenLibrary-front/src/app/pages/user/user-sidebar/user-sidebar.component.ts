import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { error } from 'console';
import Swal from 'sweetalert2';
import { LoginService } from '../../../services/login.service';



@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.css'
})
export class UserSidebarComponent implements OnInit {

  categories:any;
  constructor(private _cat:CategoryService,public login :LoginService){}
  isLoggedIn = false;
  user=null;
  
  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{
        Swal.fire('Error','Server Error','error')
      }
    );
    this.isLoggedIn=this.login.isLoginIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>
    {
      this.isLoggedIn=this.login.isLoginIn();
      this.user=this.login.getUser();
    });
    // throw new Error('Method not implemented.');
  }

  public logout(){
    this.login.logout();
    // this.isLoggedIn=false;
    // this.user=null;
    window.location.reload();
  }
}


  