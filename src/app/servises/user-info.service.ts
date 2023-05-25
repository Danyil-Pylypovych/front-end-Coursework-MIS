import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

import {IUser} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private _userInfo = new BehaviorSubject<IUser | null>(null)

  setUser(user:IUser): void {
    this._userInfo.next(user)
  };
  removeUser(): void {
    this._userInfo.next(null)
  };
  getUser(): Observable<IUser | null> {
    return this._userInfo.asObservable()
  };
}
