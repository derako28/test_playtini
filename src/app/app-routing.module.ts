import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserFormTemplateComponent} from './user-form-template/user-form-template.component';
import {UserFormReactiveComponent} from './user-form-reactive/user-form-reactive.component';

const routes: Routes = [
  { path: '', redirectTo: '/template-form', pathMatch: 'full' },
  {path: 'template-form', component: UserFormTemplateComponent},
  {path: 'reactive-form', component: UserFormReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
