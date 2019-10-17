import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-new-forms';

  Technologyused = new FormControl('Angular 7');

  setDefault() {
    //this.Technologyused.setValue('Angular 8');
    console.log(this.Technologyused.value);
  }
}
