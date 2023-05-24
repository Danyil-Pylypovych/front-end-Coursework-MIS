import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IUser} from '../interfaces';
import {Observable} from 'rxjs';
import {urls} from '../configs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  createUser(userObj: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.auth.signup, userObj);
  };

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.user.url);
  };

  getUserById(_id:string): Observable<IUser> {
    return this.httpClient.get<IUser>(urls.user.url + '/' + _id);
  };

  getUsersByParams(params: {}): Observable<IUser[]> {
    return this.httpClient.post<IUser[]>(urls.user.getByParams, params);
  };
  getUsersByToken(access_token: string): Observable<IUser> {
    const headers = new HttpHeaders().set('Authorization', access_token);
    return this.httpClient.get<IUser>(urls.user.getByToken, { headers });
  };

  getUsersBySpecialty(specialty: string): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.user.getBySpecialty + '/' + specialty);
  };

  updateUser(patientId: string, updatedUserObj: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(urls.user.url + '/' + patientId, updatedUserObj);
  };

  deleteUser(_id: string): Observable<IUser> {
    return this.httpClient.delete<IUser>(urls.user.url + '/' + _id);
  };
}
