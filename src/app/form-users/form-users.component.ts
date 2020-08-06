import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../user-service.service';
import { User } from '../model/user';

@Component({
  selector: 'form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss']
})
export class FormUsersComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  users: User[] = [];

  constructor(private _formBuilder: FormBuilder, private _userService: UserService) { }

  ngOnInit() {
    this.createForm();

    this._userService.getUsers()
      .subscribe(users => this.users = users);
  }

  private createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this._formBuilder.group({
      'name': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'obs': [null],
      'canDrive': false
    });
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  get lastName() {
    return this.formGroup.get('lastName') as FormControl
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Field is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  onSubmit(post) {
    this.post = post;

    // publish value
    let user: User = new User();
    user.name = post.name;
    user.lastName = post.lastName;
    user.email = post.email;
    user.obs = post.obs;
    user.canDrive = post.canDrive;
    this._userService.addUser(user);
    
    // clean form
    this.formGroup.reset();
    this.formGroup.markAsUntouched();

    // tag confirmation
    // list result
  }
}
