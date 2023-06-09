import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {IUserCard} from '../interfaces';
import {urls} from '../configs';

@Injectable({
  providedIn: 'root'
})
export class UserCardService {

  constructor(private httpClient: HttpClient) {
  };

  createUserCard(clientId: string, userCardObj: IUserCard): Observable<IUserCard> {
    return this.httpClient.post<IUserCard>(urls.user.createClientCard + '/' + clientId, userCardObj);
  };

  // todo
  // getAllUserCards(token: string):Observable<IUserCard[]> {
  //   return this.httpClient.get<IUserCard[]>(urls.user.clientCardAll, token);
  // };

  getAllUserCardsByUserId(userId: string): Observable<IUserCard[]> {
    return this.httpClient.get<IUserCard[]>(urls.user.clientCardAll + '/' + userId);
  };
}
