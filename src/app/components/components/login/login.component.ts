import { Component, Input } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [
    CheckboxModule,
    ButtonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  @Input() errorMsg: string;
  @Input() displayError: boolean;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.errorMsg='';
    this.displayError=true;
  }
  get email() {
    return this.loginForm.controls['email'];
  }
  get password() { return this.loginForm.controls['password']; }

  loginUser() {
    debugger
    const { email, password } = this.loginForm.value;
    this.authService.getUserByEmail(email as string).subscribe(
      (response) => {
        if (response.length > 0 && response[0].password === password) {
          sessionStorage.setItem('email', email as string);
          //this.router.navigate(['/home2']);
          this.router.navigate(['/home2'], { queryParams: { login: 'y' } });
        } else {
          alert('email or password is wrong ');
          //this.msgService.add({ severity: 'error', summary: 'Error', detail: 'email or password is wrong' });
        }
      },
      (error) => {
        console.error;
        //this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    );
  }
  isFieldValid(field: string) {
   

    return !this.loginForm.controls[field].valid && this.loginForm.controls[field].touched;
  
}

displayFieldCss(field: string) {

  return {
    'has-error': this.isFieldValid(field),
    'has-feedback': this.isFieldValid(field)
  };
}
}
