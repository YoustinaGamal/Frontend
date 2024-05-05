import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterForm } from '../Interface/register-form';
import { LoginForm } from '../Interface/login-form';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userToken: any;
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}
  authToken: any;

  // Register Api
  register(registerForm: RegisterForm): Observable<any> {
    return this._HttpClient.post(
      'https://localhost:44322/api/Auth/Register',
      registerForm
    );
  }

  // Login Api
  login(LoginForm: LoginForm): Observable<any> {
    return this._HttpClient.post(
      'https://localhost:44322/api/Auth/Login',
      LoginForm
    );
  }

  // Logout Api
  logOut() {
    localStorage.removeItem('token');
    this.userToken = '';
    this._Router.navigate(['/Welcome']);
  }
}
