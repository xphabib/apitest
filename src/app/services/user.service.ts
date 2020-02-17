import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Base } from '../services/base';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private base: Base,
    private authService: AuthService
  ) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.base.api_url + 'users.json', { headers: { Authorization: `Bearer ${this.authService.getAuth()}`}});
  }

  public login(user, password): Observable<any> {
    return this.http.post<any>(this.base.api_url + 'users/login', {user: {email: user, password: password}});
  }
}
