import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BASE_URL } from '../const';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = BASE_URL;

  constructor(private client:HttpClient) { }

  getResidents():Observable<any[]>{
    return this.client.get<any>(`${this.apiUrl}/api/getresidents`)
  }

  getPosts():Observable<any[]>{
    return this.client.get<any>(`${this.apiUrl}/api/getposts`)
  }
}
