import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = "";
  password = ""
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.email, this.password).subscribe(resp => {
      this.authService.setAuth(resp);
    });
  }
}
