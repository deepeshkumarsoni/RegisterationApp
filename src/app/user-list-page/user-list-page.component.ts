import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user-registeration/user-registeration.component';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent implements OnInit {

  constructor(private userService: UserService) {

  }
  userList = [];
  ngOnInit() {
    this.userList = this.userService.getUser();
    console.log('User List: ', this.userList)
  }
  //listUser :  userList[],
}
