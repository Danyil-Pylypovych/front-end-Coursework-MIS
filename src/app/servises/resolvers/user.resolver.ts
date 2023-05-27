import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {IUser} from "../../interfaces";
import {UserService} from "../user.service";
import {AuthService} from "../auth.service";
import {UserInfoService} from "../user-info.service";


@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {
  user: IUser;

  constructor(private userService: UserService,
              private authService: AuthService,
              private userInfoService: UserInfoService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser {
    const access_token = this.authService.getAccessToken()
    this.userService.getUsersByToken(access_token).subscribe({
      next: (value) => {
        this.user = value
        this.userInfoService.setUser(value)
      }, error: (e) => console.log(e)
    });
    return this.user
  }
}
