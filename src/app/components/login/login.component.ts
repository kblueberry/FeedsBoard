import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';

import {AuthService} from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  get form() {
    return this.loginForm.controls;
  }

  public userLogin() {
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;

    if (!username || !password) {
      alert('Please check if username and password entered correctly!');
      return;
    }

    const isValid = this.authService.login(this.form.username.value, this.form.password.value);

    if (isValid) {
      this.router.navigate(['/feeds']);
    }
  }
}
