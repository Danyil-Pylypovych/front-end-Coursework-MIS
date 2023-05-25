import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {IAuth, ITokens, IUser} from "../interfaces";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {urls} from "../configs";
import {UserInfoService} from "./user-info.service";
import {IRegUser} from "../interfaces/reg-user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _accessTokenKey: string = 'access';
  private readonly _refreshTokenKey: string = 'refresh';
  private _authUser = new BehaviorSubject<string|null>(null);


  constructor(private httpClient:HttpClient,
              private userInfoService:UserInfoService) { }
  login(user: IAuth): Observable<ITokens> {
    return this.httpClient.post<ITokens>(urls.auth.login, user).pipe(
      tap((tokens) => {
        this._authUser.next(user.email)
        this._setTokens(tokens)
      })
    )
  }

  refresh(refresh: string): Observable<ITokens> {
    return this.httpClient.post<ITokens>(urls.auth.refresh, {refresh}).pipe(
      tap((tokens) =>
        this._setTokens(tokens)
      )
    )
  }

  register(user:IRegUser):Observable<IUser>{
    return  this.httpClient.post<IUser>(urls.auth.signup, user)
  }

  getUserEmail():Observable<string|null>{
    return this._authUser.asObservable()
  }

  private _setTokens({access_token, refresh_token}: ITokens): void {
    localStorage.setItem(this._accessTokenKey, access_token)
    localStorage.setItem(this._refreshTokenKey, refresh_token)
  };

  isAuthenticated():boolean{
    return !!this.getAccessToken()
  }

  getAccessToken(): string {
    return localStorage.getItem(this._accessTokenKey) || ''
  };

  getRefreshToken(): string {
    return localStorage.getItem(this._refreshTokenKey) || ''
  };

  deleteTokens(): void {
    localStorage.removeItem(this._refreshTokenKey)
    localStorage.removeItem(this._accessTokenKey)
    this._authUser.next(null)
  };
  logout():void {
    const access_token = this.getAccessToken();
    const headers = new HttpHeaders().set('Authorization', access_token);
    this.httpClient.post(urls.auth.logout, {}, {headers: headers}).subscribe({
      next: () => {
        this.deleteTokens()
        this.userInfoService.removeUser()
        console.log('Logout done...')
        location.reload()
      }, error: (e) => console.log(e)
    })
  }
}
