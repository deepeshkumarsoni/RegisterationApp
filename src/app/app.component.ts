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
export interface Country{
  name : string;
  id : string;
  //selected : boolean;
}

export interface State{
  name : string;
  id : string;
  //selected : boolean;
}

export interface City{
  name : string;
  id : string;
  //selected : boolean;
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
  country : Country;
  countryList : Country[];
  state : State;
  stateList : State[];
  city : City;
  cityList : City[];

  constructor(){
     this.user = {
        firstName:'Deepesh',
        lastName:'Soni',
        age : 28,
        gender : 'Male',
        email : 'deepesh@gmail.com',
        password : 'abcd',
        country : "INDIA",
        state : 'PUNE',
        city : 'VADGAON',
        dateOfBirth : new Date('14/3/1991') ,
        timeOfBirth : '2 PM',
        academyList : ['1','2'],
      };
      this.userList = [];
      
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
    
      this.countryList.push(
        {       
          name : "India",
          id : '1',
          //selected : false,
        },
        {
          name : "USA",
          id : '2',
          //selected : false,
        },
        { 
          name : "CANADA",
          id : '3',
          //selected : true,
        }
      );  
      
      this.stateList.push(
        {       
          name : "PUNE",
          id : '1',
          //selected : false,
        },
        {
          name : "HYD",
          id : '2',
          //selected : false,
        },
        { 
          name : "DELHI",
          id : '3',
          //selected : true,
        }
      );  

      this.cityList.push(
        {       
          name : "VADGAON",
          id : '1',
          //selected : false,
        },
        {
          name : "KPHBC",
          id : '2',
          //selected : false,
        },
        { 
          name : "TORRENTO",
          id : '3',
          //selected : true,
        }
      );  

      
  }   
    isSelected(academyId: string) {
      return this.user.academyList.indexOf(academyId) > -1;
    }

    isCountrySelect(countryId : string){
      return this.user.country.indexOf(countryId) > -1;
    }

    isStateSelect(stateId : string){
      return this.user.state.indexOf(stateId) > -1;
    }
  
    isCitySelect(cityId : string){
      return this.user.city.indexOf(cityId) > -1;
    }
  
} 

  
  

  

