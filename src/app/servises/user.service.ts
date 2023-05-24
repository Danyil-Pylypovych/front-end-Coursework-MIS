import {HttpClient} from '@angular/common/http';
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

  getUsersByParams(params: {}): Observable<IUser[]> {
    console.log(params, 'params')
    return this.httpClient.post<IUser[]>(urls.user.getByParams, params);
  };
  getUsersBySpecialty(specialty: string): Observable<IUser[]> {
    console.log( specialty,'service work')
 console.log(   urls.user.getBySpecialty + '/' + specialty)
    return this.httpClient.get<IUser[]>(urls.user.getBySpecialty + '/' + specialty);
  };

  updateUser(patientId: string, updatedUserObj: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(urls.user.url + '/' + patientId, updatedUserObj);
  };

  deleteUser(_id: string): Observable<IUser> {
    return this.httpClient.delete<IUser>(urls.user.url + '/' + _id);
  };
}
