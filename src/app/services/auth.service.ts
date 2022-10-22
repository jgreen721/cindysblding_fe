import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { BASE_URL } from '../const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public apiUrl = BASE_URL
  constructor(private apiService:ApiService, private http:HttpClient) { }

  currentUser:any={};


  checkSession=()=>{
    let cookie = document.cookie;
    console.log("COOKIE",cookie);

    return cookie ? true  : false
  }

  login(user:any):Observable<any>{
        console.log("Login fired")
       return this.http.post<any>(`${this.apiUrl}/login`, user,{withCredentials:true})
        }

  validateToken(token:string):Observable<Object>{
    console.log("Token",token)
    const httpOptions = {
      headers:new HttpHeaders({
        'auth-token':`Bearer ${token}`
      })
    }
    return this.http.get(`${this.apiUrl}/validate_token`,httpOptions)

  
  }
}
