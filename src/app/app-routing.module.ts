import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailComponent } from './components/email/email.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';

const routes: Routes = [
  { path: 'email', component: EmailComponent},
  { path: 'profile', component: ProfileFormComponent},
  { path: 'profile1', component: FormBuilderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
