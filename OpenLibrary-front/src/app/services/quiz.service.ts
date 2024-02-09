import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { get } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private  _http:HttpClient) { }

  public quizzes(){
    return this._http.get(`${baseUrl}/quiz/`);
  }
  //add quiz
  public addQuiz(quiz: any){
    return this._http.post(`${baseUrl}/quiz/`,quiz);
  }

  //delete quiz
  public deleteQuiz(quizId: any){
    return this._http.delete(`${baseUrl}/quiz/${quizId}`)
  }

  //get the single quiz
  public getQuiz(quizId :any){
    return this._http.get(`${baseUrl}/quiz/${quizId}`);
  }

  //update 
  public updateQuiz(quiz: any){
    return this._http.put(`${baseUrl}/quiz/`,quiz);
  }
}
