import { Component } from '@angular/core';
import { Time } from '@angular/common';

export interface User{
  firstName : string;
  lastName : string;
  age : number;
  gender : string;
  email : string;
  password : string;
  countryList :string[];
  stateList : string[];
  cityList : string[];
  dateOfBirth : Date;  
  timeOfBirth : string; 
  academyList : string[];
};

export interface Gender{
  name : string;
  id : string;
} 
export interface Academy {
  name: string;
  id: string;
  selected: boolean;
}
export interface Country{
  name : string;
  id : string;
  selected : boolean;
}

export interface State{
  name : string;
  id : string;
  selected : boolean;
}

export interface City{
  name : string;
  id : string;
  selected : boolean;
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
  genderList : Gender[] = [];
  academyList : Academy[] = [];
  //country : Country;
  countryList : Country[] = [];
  //state : State;
  stateList : State[] = [];
  //city : City;
  cityList : City[] = [];

  constructor(){
     this.user = {
        firstName:'Deepesh',
        lastName:'Soni',
        age : 28,
        gender : '1',
        email : 'deepesh@gmail.com',
        password : 'abcd',
        countryList : ["INDIA"],
        stateList : ['PUNE'],
        cityList : ['VADGAON'],
        dateOfBirth : new Date('14/3/1991') ,
        timeOfBirth : '2 PM',
        academyList : ['1','3']
      };
        this.userList = [];

      this.genderList.push(
        {
          name : 'Male',
          id : '1',
        },
        {
          name : 'Female',
          id : '2',
        }
      );  

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
          selected : false,
        },
        { 
          name : "Post-Graduate",
          id : '4',
          selected : false,
        }
      );  
    
      // this.countryList.push(
      //   {       
      //     name : "India",
      //     id : '1',
      //     selected : false,
      //   },
      //   {
      //     name : "USA",
      //     id : '2',
      //     selected : false,
      //   },
      //   { 
      //     name : "CANADA",
      //     id : '3',
      //     selected : false,
      //   }
      // )  
      
      // this.stateList.push(
      //   {       
      //     name : "Pune",
      //     id : '1',
      //     selected : false,
      //   },
      //   {
      //     name : "New Jerssy",
      //     id : '2',
      //     selected : false,
      //   },
      //   { 
      //     name : "Torronto",
      //     id : '3',
      //     selected : false,
      //   }
      // )  

      // this.cityList.push(
      //   {       
      //     name : "VADGAON",
      //     id : '1',
      //     selected : false,
      //   },
      //   {
      //     name : "Cantaky",
      //     id : '2',
      //     selected : false,
      //   },
      //   { 
      //     name : "Kala Handi",
      //     id : '3',
      //     selected : false,
      //   }
      // ) 
                    
  } 
    isGenderSelected(genderId: string) {
      if(this.user.gender === genderId){
        return true;
      }        
     
  }

    isSelected(academyId: string) {
      return this.user.academyList.indexOf(academyId) > -1;
    }

    // deleteItem(itemToDelete){
    //   const newtodoList = this.todoList.filter((existingItem) =>
    //    existingItem !== itemToDelete);
    //    this.todoList = newtodoList;

    // isCountrySelect(countryId : string){
    //   return this.user.countryList.indexOf(countryId) > -1;
    // }

    // isStateSelect(stateId : string){
    //   return this.user.stateList.indexOf(stateId) > -1;
    // }
  
    // isCitySelect(cityId : string){
    //   return this.user.cityList.indexOf(cityId) > -1;
    // }
  
} 

  
  

  

