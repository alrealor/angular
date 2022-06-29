import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-simple-form-example',
  templateUrl: './simple-form-example.component.html',
  styles: ['label { width: 80px; };']
})
export class SimpleFormExampleComponent implements OnInit {

  @ViewChild('phoneBookForm', {static: true})
  phoneBookForm: any;

  phoneBookList: PhoneBook[] = [];

  constructor() { }

  ngOnInit(): void {
    this.phoneBookForm.value.firstName = "Coder";
    this.phoneBookForm.value.lastName = "Bytes";
    this.phoneBookForm.value.phoneNumber = 1234567890;
  }

  // function that creates new entry for phone book based on form, add it to the list of phone books and sort by last name
  onSubmit(phoneBookForm: PhoneBook) {
    let phoneBookEntry: PhoneBook = new PhoneBook();
    phoneBookEntry.firstName = phoneBookForm.firstName;
    phoneBookEntry.lastName = phoneBookForm.lastName;
    phoneBookEntry.phoneNumber = phoneBookForm.phoneNumber;
    this.phoneBookList.push(phoneBookEntry);
    // sort phone book list by last name
    this.phoneBookList.sort( (x, y) => (x.lastName!.toUpperCase() > y.lastName!.toUpperCase()) ? 1
                                           : (y.lastName!.toUpperCase()  > x.lastName!.toUpperCase() ) ? -1
                                                : 0);
  }
}

export class PhoneBook {
  firstName?: string;
  lastName?: string;
  phoneNumber?: number;
}
