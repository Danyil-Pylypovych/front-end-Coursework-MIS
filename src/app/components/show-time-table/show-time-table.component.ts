import {Component, OnInit} from '@angular/core';

import {TimetableService, UserInfoService, UserService} from "../../servises";
import {ITimetable, IUser} from "../../interfaces";

@Component({
  selector: 'app-show-time-table',
  templateUrl: './show-time-table.component.html',
  styleUrls: ['./show-time-table.component.scss']
})
export class ShowTimeTableComponent implements OnInit {
  user: IUser | null;
  timetables: ITimetable[];

  constructor(private userInfoService: UserInfoService,
              private timetableService: TimetableService,
              private userService: UserService) {
  };

  ngOnInit(): void {
    this.userInfoService.getUser().subscribe(value => {
      value && this.timetableService.getByParams({doctorId: value._id}).subscribe({
        next: (value) => {
          this.timetables = value
        },
        error: (e) => console.log(e)
      })
    })
  };

  getUserName(_id: string): string | undefined {
    let patient
    this.userService.getUserById(_id).subscribe({
      next: (value) => patient = value.name,
      error: (e) => console.log(e)
    })
    return patient
  }
}
