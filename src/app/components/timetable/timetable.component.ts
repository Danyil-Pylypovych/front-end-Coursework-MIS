import {Component, Input, OnInit} from '@angular/core';

import {ITimetable, IUser} from "../../interfaces";
import {TimetableService, UserInfoService} from "../../servises";

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  @Input() doctor: IUser
  timetable: ITimetable[]
  user: IUser | null;
  timetableId:string | null;

  constructor(private timetableService: TimetableService,
              private userInfoService: UserInfoService) {
  };

  ngOnInit(): void {
    this.getTimetable();
    this.userInfoService.getUser().subscribe(value => this.user = value)

  }

  getTimetable(): void {
    const _id = this.doctor._id

    this.timetableService.getByParams({doctorId: _id}).subscribe({
      next: (value) => this.timetable = value,
      error: (e) => console.log(e)
    })
  };


  chooseTime(time: ITimetable): void {
    time = {...time, isChecked: true, patientName: this.user!.name}
    this.timetable = this.timetable
      .map(value => (value._id === time._id) ? time : value);
    this.timetableId = null;
    this.timetableService.updateTimetable(this.user!._id, time)
      .subscribe({
        next: (value) => console.log(value),
        error: (e) => console.log(e)
      })
  };
}
