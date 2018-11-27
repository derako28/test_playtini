import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {UserFormReactiveComponent} from './user-form-reactive/user-form-reactive.component';
import {UserFormTemplateComponent} from './user-form-template/user-form-template.component';
import {NavigationComponent} from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormReactiveComponent,
    UserFormTemplateComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
