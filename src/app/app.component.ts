import { Component } from '@angular/core';
import { Time } from '@angular/common';

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
  dateOfBirth : Date;  
  timeOfBirth : string; 
  academyList : string[];
};

export interface Academy {
  name: string;
  id: string;
  selected: boolean;
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
  academyList : Academy[] = [];

  constructor(){
     this.user = {
        firstName:'Deepesh',
        lastName:'Soni',
        age : 28,
        gender : 'M',
        email : 'deepesh@gmail.com',
        password : 'abcd',
        country : 'India',
        state : 'CG',
        city : 'Bhilai',
        dateOfBirth : new Date('14/3/1991') ,
        timeOfBirth : '2 PM',
        academyList : ['1','2'],
      };
    
      this.academyList.push(
        {       
          name : "10th",
          id : '1',
          selected : false,
        },
        {
          name : "12th",
          id : '2',
          selected : false,
        },
        { 
          name : "Graduate",
          id : '3',
          selected : true,
        }
      );  
        this.userList = [];
  }
   
    isSelected(academyId: string) {
      return this.user.academyList.indexOf(academyId) > -1;
    }
  
} 

  
  

  

