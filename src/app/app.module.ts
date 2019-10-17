import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailComponent } from './components/email/email.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    HeaderComponent,
    ProfileFormComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
