import { Component, OnInit } from '@angular/core';
import { User, Address } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  // Properties
  user: User;
  address: Address;

  // Methods
  constructor() {}

  ngOnInit() {
    this.address = {
      street: '32nd Street',
      city: 'Taguig',
      state: 'PH'
    };

    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      age: 25,
      address: this.address
    };

  }

}

