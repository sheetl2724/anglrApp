import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../../model/interface/userI';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000';

  private isLoggedIn = false;
  constructor(private http:HttpClient) { }

  getUserByEmail(email: string): Observable<User[]> {
    debugger
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }
  login() {
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true'); // Store in localStorage
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  checkLoginStatus(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
