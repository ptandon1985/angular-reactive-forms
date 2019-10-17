import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  email = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  updateEmail() {
    this.email.setValue("TestEmail@TestDomain.com");
  }

}
