import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _accessTokenKey: string = 'access';
  private readonly _refreshTokenKey: string = 'refresh';
  
  constructor() { }
}
