import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public setAuth(auth_data) {
    let header = {
      token: auth_data.auth_token
    }

    localStorage.setItem('auth_header', JSON.stringify(header));
  }

  public getAuth() {
    let header = localStorage.getItem('auth_header');
    let auth_data = header ? JSON.parse(header) : {};
    return auth_data['token'];
  }
}
