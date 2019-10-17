import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  userProfileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    // Nested Form FormGroup
      address: new FormGroup({
        address1: new FormControl('', Validators.required),
        address2: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      })
  });
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userProfileForm.value);
    console.warn('First Name:'+this.userProfileForm.controls['firstName'].value);
    console.warn('Last Name:'+this.userProfileForm.get('lastName').value);
    console.log('Nested Form Element Address 1: '+ this.userProfileForm.get(['address','address1']).value);
    console.log('Nested Form Element Address 2: '+ this.userProfileForm.get('address').get('address2').value);
  }
}
