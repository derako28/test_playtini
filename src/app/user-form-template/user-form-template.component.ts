import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form-template',
  templateUrl: './user-form-template.component.html',
  styleUrls: ['./user-form-template.component.scss']
})

export class UserFormTemplateComponent {

  user = new User('', '', '');

  onSubmit() {
    console.log(this.user);
  }
}
