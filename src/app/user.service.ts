import { Injectable } from '@angular/core';
import { User } from './user-registeration/user-registeration.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList = [];
  constructor() { }
  setUser(user) {
    this.userList.push(user)
  }

  getUser() {
    return this.userList;
  }

}
