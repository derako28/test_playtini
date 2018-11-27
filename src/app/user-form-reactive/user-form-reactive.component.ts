import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from '../user';

@Component({
  selector: 'app-user-form-reactive',
  templateUrl: './user-form-reactive.component.html',
  styleUrls: ['./user-form-reactive.component.scss']
})

export class UserFormReactiveComponent implements OnInit {

  user = new User('', '', '');

  userForm: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'firstName': new FormControl(this.user.firstName, [
        Validators.required,
        Validators.minLength(3)
      ]),
      'lastName': new FormControl(this.user.lastName, [
        Validators.required,
        Validators.minLength(3)
      ]),
      'phone': new FormControl(this.user.phone, [
        Validators.required,
        Validators.pattern('\\+380\\d{3}\\d{2}\\d{2}\\d{2}')
      ]),
    });
  }

  get firstName() { return this.userForm.get('firstName'); }

  get lastName() { return this.userForm.get('lastName'); }

  get phone() { return this.userForm.get('phone'); }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.userForm.value);
  }

}
