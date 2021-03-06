import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

export interface User {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  password: string;
  country: string;
  state: string;
  city: string;
  dateOfBirth: Date;
  timeOfBirth: string;
  academyList: string[];
  userId: string;
};

export interface Academy {
  name: string;
  id: string;
  selected: boolean;
}
export interface Country {
  name: string;
  countryId: string;
}

export interface State {
  name: string;
  stateId: string;
  countryId: string;
}

export interface City {
  name: string;
  cityId: string;
  stateId: string;
}

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.scss']
})

export class UserRegisterationComponent implements OnInit {
  title = 'RegisterationApp';
  user: User;
  userList: User[] = [];
  academyList: Academy[] = []; // define as array of academy and initialize with empty array.
  countryListFromServer: Country[] = [];
  stateList: State[] = [];
  cityList: City[] = [];
  stateListFromServer: State[];
  cityListFromServer: City[];

  constructor(private userService: UserService) {   // Dependency Injection is done here.
    // the selected user data
    this.user = this.emptyUser();
    debugger;
    this.countryListFromServer = [
      {
        name: 'INDIA',
        countryId: 'IN',
      },
      {
        name: 'USA',
        countryId: 'USA',
      }
    ];

    this.stateListFromServer = [
      {
        name: 'Maharastra',
        stateId: 'MAH',
        countryId: 'IN',
      },
      {
        name: 'Chattisgarh',
        stateId: 'CG',
        countryId: 'IN',
      },
      {
        name: 'New York',
        stateId: 'NY',
        countryId: 'USA',
      },
      {
        name: 'Manhatten',
        stateId: 'MH',
        countryId: 'USA',
      }
    ];

    this.cityListFromServer = [
      {
        name: 'Nagpur',
        cityId: 'NGP',
        stateId: 'MAH'
      },
      {
        name: 'Pune',
        cityId: 'PUNE',
        stateId: 'MAH'
      },
      {
        name: 'Bhilai',
        cityId: 'BH',
        stateId: 'CG',
      },
      {
        name: 'Durg',
        cityId: 'DG',
        stateId: 'CG',
      },
      {
        name: 'Kalahandi',
        cityId: 'KHD',
        stateId: 'NY'
      },
      {
        name: 'Shaitaan Galli',
        cityId: 'SG',
        stateId: 'NY'
      },
      {
        name: 'Ram Nagar',
        cityId: 'RN',
        stateId: 'MH',
      },
      {
        name: 'Khursipar',
        cityId: 'KHG',
        stateId: 'MH',
      }
    ];

    this.academyList.push(
      {
        name: "10th",
        id: '1',
        selected: false,
      },
      {
        name: "12th",
        id: '2',
        selected: false,
      },
      {
        name: "Graduate",
        id: '3',
        selected: false,
      },
      {
        name: "Post-Graduate",
        id: '4',
        selected: false,
      }
    );
  }
  ngOnInit(): void {
    this.stateList = this.filterStateByCountryId(null);
    this.cityList = this.filterCityByStateId(null);
  }

  /**
   * While rendering each checkbox we will call this function
   * and this function will check if the academy id belongs to user or not.
   * @param academyId academy of raw data.
   */
  isSelected(academyId: string) {
    return this.user.academyList.indexOf(academyId) > -1;
  }

  onAcademySelection(academyId: string) {    
    this.user.academyList.push(academyId);
  }

  onCountrySelection(countryId: string) {
    if (countryId) {
      let filteredCountry =
       this.countryListFromServer.filter(item => item.countryId === countryId);
      this.user.country = filteredCountry[0].name;

    }
    this.stateList = this.filterStateByCountryId(countryId);
  }

  onStateSelection(stateId: string) {
    if (stateId) {
      let filteredState =
       this.stateListFromServer.find(item => item.stateId === stateId);
      this.user.state = filteredState.name;
    }
    //this.user.state = stateId;
    this.cityList = this.filterCityByStateId(stateId);
  }

  onCitySelection(cityId: string) {
    //this.user.city = cityId;
    if (cityId) {
      let filteredcity =
       this.cityListFromServer.find(item => item.cityId === cityId);
      this.user.city = filteredcity.name;
    }
  }

  onRegister() {
    this.user.userId = Date.now().toPrecision();
    this.userList.push(this.user);
    this.userService.setUser(this.user);
    this.user = this.emptyUser();
  }

  private filterStateByCountryId(countryId: string) {
    /**
     * Get all of the states belongs to countryId
     */
    if (countryId) {
      return this.stateListFromServer.filter(
        (state) => state.countryId === countryId
      );
    } else {
      return [...this.stateListFromServer];
    }
  }

  private filterCityByStateId(stateId: string) {
    /**
     * get all of the city belongs to stateId
     */
    if (stateId) {
      return this.cityListFromServer.filter((city) => city.stateId === stateId);
    } else {
      return [...this.cityListFromServer];
    }
  }

  private emptyUser() {
    return {
      userId: null,
      firstName: '',
      lastName: '',
      age: 0,
      gender: '',
      email: '',
      password: '',
      country: '',
      state: '',
      city: '',
      dateOfBirth: null,
      academyList: [],
      timeOfBirth: null,
    };
  }
}

