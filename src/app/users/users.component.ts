import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user = new User;
  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.load_user();
  }

  load_user() {
    this.userService.getUsers().subscribe(resp => {
      this.user = resp;
    });
  }
}
