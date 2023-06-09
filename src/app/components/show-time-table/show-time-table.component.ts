import {Component, OnInit} from '@angular/core';

import {TimetableService, UserInfoService, UserService} from "../../servises";
import {ITimetable, IUser} from "../../interfaces";
import {MatDialog} from "@angular/material/dialog";
import {CreateClientCardModalComponent} from "../create-client-card-modal/create-client-card-modal.component";

@Component({
  selector: 'app-show-time-table',
  templateUrl: './show-time-table.component.html',
  styleUrls: ['./show-time-table.component.scss']
})
export class ShowTimeTableComponent implements OnInit {
  user: IUser | null;
  timetables: ITimetable[];
  fullTimetable: boolean = true;
  atAppointment:string | null;

  constructor(private userInfoService: UserInfoService,
              private timetableService: TimetableService,
              private userService: UserService,
              private dialog: MatDialog) {
  };

  ngOnInit(): void {
    this.getData();
  };

  getData(): void {
    this.userInfoService.getUser().subscribe(value => {
      value && this.timetableService.getAll({doctorId: value._id}).subscribe({
        next: (value) => {
          this.timetables = value
          console.log(this.timetables)
        },
        error: (e) => console.log(e)
      })
    })
  }

  createClientCard(timetable: ITimetable) {
    const dialogRef = this.dialog.open(CreateClientCardModalComponent, {
        disableClose: true,
        enterAnimationDuration: '1s',
        exitAnimationDuration: '1s',
        hasBackdrop: false,
        data: timetable,
      }
    )
    dialogRef.componentInstance.dataUpdated.subscribe(() => {
      this.atAppointment = null
      this.getData();
    });
  };
}
