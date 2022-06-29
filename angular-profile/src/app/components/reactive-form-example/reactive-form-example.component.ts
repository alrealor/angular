import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styles: ['label { width: 80px; };']
})
export class ReactiveFormExampleComponent implements OnInit {

  phoneBookList: PhoneBook[] = [];

  phonebookForm = new FormGroup({
    firstName: new FormControl('Alan'),
    lastName: new FormControl('Altamirano'),
    phoneNumber: new FormControl('4491234567')
  });

  constructor() { }

  ngOnInit(): void {}

  updateFormData() {
    this.phonebookForm.patchValue({
      firstName: 'Fernando',
      lastName: 'Altamirano',
      phoneNumber: ''
    });
  }

  // list phone book list
  onSubmit() {
    let phoneBook: PhoneBook = new PhoneBook();
    phoneBook.firstName = this.phonebookForm.value.firstName;
    phoneBook.lastName = this.phonebookForm.value.lastName;
    phoneBook.phoneNumber = this.phonebookForm.value.phoneNumber;
    this.phoneBookList.push(phoneBook);
    // sort phone book list by last name
    this.phoneBookList.sort( (a,b) => (a.lastName!.toUpperCase() > b.lastName!.toUpperCase()) ? 1
                                        : (b.lastName!.toUpperCase() > a.lastName!.toUpperCase()) ?  -1 : 0);
  }
}

export class PhoneBook {
  firstName?: string;
  lastName?: string;
  phoneNumber?: number;
}
