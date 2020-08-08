import { Injectable } from '@angular/core';

import { User } from './model/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userStorage: User[] = [];

  constructor() { }

  addUser(user: User): void {
    this._userStorage.push(user);
  }

  getUsers(): Observable<User[]> {
    return of(this._userStorage);
  }
}
