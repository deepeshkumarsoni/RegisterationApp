import { Component } from '@angular/core';

export interface User{
  firstName : string;
  lastName : string;
  age : number;
  gender : string;
  email : string;
  password : string;
  country :string;
  state : string;
  city : string;
  dob : number;  
  academic : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RegisterationApp';
  user : User;
  userList : User[];
  
  constructor(){
     this.user = {
        firstName:'',
        lastName:'',
        age : 0,
        gender : '',
        email : '',
        password : '',
        country : '',
        state : '',
        city : '',
        dob : 0,
        academic : '',
      };
      this.userList = [];
  }

  register(){

  }

}
