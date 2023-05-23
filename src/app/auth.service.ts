import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { Event } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any
  user: any


  constructor(private http: HttpClient,
    private router: Router) { }

  registerPatient(patient: Object) {
    console.log("lol")
    let headers = new HttpHeaders()
    headers.append('Content-type', 'application/json')
    return this.http.post('http://localhost:3000/account/reg', patient).pipe(map((response: any) => response.json))
  }

  authPatient(patient: Object) {
    let headers = new HttpHeaders()
    headers.append('Content-type', 'application/json')
    return this.http.post('http://localhost:3000/account/auth', patient).pipe(map((response: any) => response.json))
  }

  storePatient(token: any, user: any) {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.token = token
    this.user = user
  }
}
