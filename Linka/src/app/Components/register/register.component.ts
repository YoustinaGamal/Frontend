import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../Services/auth.service';
import { response } from 'express';
import { Route, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  registerForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
      Validators.pattern(/^[A-Z]{1}[a-z]{0,}$/),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    isInvestor: new FormControl(null, [Validators.required]),
  });
  errorMessage: string = '';
  successMessage: string = '';
  register() {
    try {
      console.log(this.registerForm.value);
      this._AuthService.register(this.registerForm.value).subscribe({
        next: (response) => {
          if (response.message == 'success') {
            this._Router.navigate(['/Login']);
          }
        },
        error: (err) => {
          console.log(err.error.errors.msg);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
