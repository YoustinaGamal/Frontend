import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { response } from 'express';
import { Route, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private _AuthService: AuthService, private X: Router) {}
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  login() {
    console.log(this.loginForm.value);

    try{
      this._AuthService.login(this.loginForm.value).subscribe({
        next: (response) =>{
          localStorage.setItem("token",response.token)
          this.X.navigateByUrl('/home-investor');
        },
        error:(err)=>{
          // console.log(err.error.errors.message);
        }
      })
    }catch (error){
      console.log(error);
    }
  }
}
