import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = `http://localhost:4455`

  constructor(private client:HttpClient) { }

  getResidents():Observable<any[]>{
    return this.client.get<any>(`${this.apiUrl}/api/getresidents`)
  }

  getPosts():Observable<any[]>{
    return this.client.get<any>(`${this.apiUrl}/api/getposts`)
  }
}
