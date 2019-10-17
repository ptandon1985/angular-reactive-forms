import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  userProfileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],

    address: this.fb.group({
      address1: [''],
      address2: [''],
      state: [''],
      zip: ['']
    })
  });

  onSubmit () {
    console.warn(this.userProfileForm.value);
    console.warn('First Name: '+this.userProfileForm.controls['firstName'].value);
    console.warn('Last Name: '+this.userProfileForm.get('lastName').value);
    console.warn('Address 1: '+this.userProfileForm.get(['address','address1']).value);
    console.warn('Address 2: '+this.userProfileForm.get('address').get('address2').value);
  }

  ngOnInit() {
  }

}
