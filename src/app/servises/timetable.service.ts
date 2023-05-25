import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ITimetable, ITimetableForUpdate} from '../interfaces';
import { urls } from '../configs';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private httpClient: HttpClient) { }

  createTimetable(timetableObj: Object):Observable<ITimetable> {
    return this.httpClient.post<ITimetable>(urls.timetable.create, timetableObj);
  };

  getByParams(params: Object):Observable<ITimetable[]> {
    return this.httpClient.post<ITimetable[]>(urls.timetable.url, params);
  };

  updateTimetable(patientId: string, timetable: ITimetable):Observable<ITimetable> {
    return this.httpClient.put<ITimetable>(urls.timetable.change + '/' + patientId, timetable);
  };
  updateTimetableCompleted(timetableObg: ITimetableForUpdate):Observable<ITimetable> {
    return this.httpClient.put<ITimetable>(urls.timetable.change, timetableObg);
  };
}
