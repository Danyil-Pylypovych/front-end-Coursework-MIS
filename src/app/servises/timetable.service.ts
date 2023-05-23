import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITimetable } from '../interfaces';
import { urls } from '../configs';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private httpClient: HttpClient) { }

  createTimetable(doctorId: string):Observable<ITimetable> {
    return this.httpClient.post<ITimetable>(urls.timetable.create, doctorId);
  };

  getByParams(params: Object):Observable<ITimetable[]> {
    return this.httpClient.get<ITimetable[]>(urls.timetable.url, params);
  };

  updateTimetable(patientId: string, timetable: ITimetable):Observable<ITimetable> {
    return this.httpClient.put<ITimetable>(urls.timetable.change + '/' + patientId, timetable);
  };
}
