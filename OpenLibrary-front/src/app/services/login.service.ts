import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // isLoggedIn(): boolean {
  //   // throw new Error('Method not implemented.');
  // }

<<<<<<< HEAD
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  //currrent user: which is login
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }

  //generate token
  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData)
  }

  //login user : set token in local storage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
=======


  public loginStatusSubject = new Subject<boolean>();

  constructor(private http : HttpClient) { }

  //currrent user: which is login
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }



  //generate token
  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`,loginData)
  }

  //login user : set token in local storage
  public loginUser(token: any){
    localStorage.setItem('token',token);
>>>>>>> origin/main
    // this.login.loginStatusSubject.next(true);
    return true;
  }

  //isLogin : user is Logged in or not
<<<<<<< HEAD
  public isLoginIn() {
    let tokenStr = localStorage.getItem("token");
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
=======
  public isLoginIn(){
    let tokenStr = localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null){
      return false;
    }else{
>>>>>>> origin/main
      return true;
    }
  }

  //logout : remove token from local storage
<<<<<<< HEAD
  public logout() {
=======
  public logout(){
>>>>>>> origin/main
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //get token
<<<<<<< HEAD
  public getToken() {
=======
  public getToken(){
>>>>>>> origin/main
    return localStorage.getItem('token');
  }


  //set userDetail
<<<<<<< HEAD
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //getUser
  public getUser() {
    let userStr = localStorage.getItem("user");
    if (userStr != null) {
      return JSON.parse(userStr);
    }
    else {
      this.logout();
      return null;
=======
  public setUser(user :any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //getUser
  public getUser(){
    let userStr = localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }
    else{
        this.logout();
        return null;
>>>>>>> origin/main
    }
  }

  //get user role
<<<<<<< HEAD
  public getUserRole() {
=======
  public getUserRole(){
>>>>>>> origin/main
    let user = this.getUser();
    return user.authorities[0].authority;
  }

}
