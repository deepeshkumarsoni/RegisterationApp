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
}
export interface Country{
  name : string;
  countryId : string;  
}

export interface State{
  name : string;
  stateId : string;
  countryId : string;
}

export interface City{
  name : string;
  cityId : string; 
  stateId : string; 
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
        state : '3',
        city : '6',
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
          countryId : '1',                    
        },
        {
          name : 'USA',
          countryId : '2',
        }        
      );

      this.stateList.push(
        {
          name : 'Maharastra',
          stateId : '1',  
          countryId : '1',        
        },
        {
          name : 'Chattisgarh',
          stateId : '2',  
          countryId : '1',    
        },
        {
          name : 'New York',
          stateId : '3',  
          countryId : '2',        
        },
        {
          name : 'Manhatten',
          stateId : '4',  
          countryId : '2',    
        }        
      );

      this.cityList.push(
        {
          name : 'Nagpur',
          cityId : '1', 
          stateId : '1'         
        },
        {
          name : 'Pune',
          cityId : '2', 
          stateId : '1'         
        },
        {
          name : 'Bhilai',
          cityId : '3',  
          stateId : '2',   
        },
        {
          name : 'Durg',
          cityId : '4',  
          stateId : '2',        
        },
        {
          name : 'Kalahandi',
          cityId : '5', 
          stateId : '3'         
        },
        {
          name : 'Shaitaan Galli',
          cityId : '6', 
          stateId : '3'         
        },
        {
          name : 'Ram Nagar',
          cityId : '7',  
          stateId : '4',   
        },
        {
          name : 'Khursipar',
          cityId : '8',  
          stateId : '4',        
        }               
      );

      this.academyList.push(
        {       
          name : "10th",
          id : '1',
        },
        {
          name : "12th",
          id : '2',
        },        
        { 
          name : "Graduate",
          id : '3',
        },
        { 
          name : "Post-Graduate",
          id : '4',
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

  
  

  

