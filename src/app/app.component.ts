import { Component } from '@angular/core';
import { Time } from '@angular/common';
import { getLocaleDateTimeFormat } from '@angular/common';

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
  countryList : Country[] = [];
  stateList : State[] = [];
  cityList : City[] = [];

  constructor(){
     this.user = {
        firstName:'Deepesh',
        lastName:'Soni',
        age : 28,
        gender : '1',
        email : 'deepesh@gmail.com',
        password : 'abcd',
        country : '1',
        state : '2',
        city : '2',
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

      this.countryList.push(
        {
          name : 'INDIA',
          id : '1',
          selected : true,          
        },
        {
          name : 'USA',
          id : '2',
          selected : false,
        }        
      );

      this.stateList.push(
        {
          name : 'Maharastra',
          id : '1',   
          selected : false,       
        },
        {
          name : 'Chattisgarh',
          id : '2',    
          selected : false,  
        }        
      );

      this.cityList.push(
        {
          name : 'Bhilai',
          id : '1',   
          selected : false,       
        },
        {
          name : 'Pune',
          id : '2',    
          selected : false,  
        },
        {
          name : 'Nagpur',
          id : '3',   
          selected : false,       
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
    
      
                    
  } 
    isGenderSelected(genderId: string) {
      if(this.user.gender === genderId){
        return true;
      }        
     
  }

    isSelected(academyId: string) {
      return this.user.academyList.indexOf(academyId) > -1;
    }
    
    isCountrySelected(countryId : string){
      if(this.user.country === countryId){
        return true
      }      
    }

    isStateSelected(stateId : string){
      if(this.user.state === stateId){
        return true
      }      
    }

    isCitySelected(cityId : string){
      if(this.user.city === cityId){
        return true
      }      
    }
        
} 

  
  

  

