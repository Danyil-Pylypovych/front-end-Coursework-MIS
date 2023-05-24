import {Component, Input, OnInit} from '@angular/core';
import {ITimetable, IUser} from "../../interfaces";
import {TimetableService} from "../../servises";

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit{
  @Input() doctor: IUser
  timetable:ITimetable[]

  constructor(private timetableService: TimetableService) {
  };

  ngOnInit(): void {
    this.getTimetable()

  }

  getTimetable(): void {
    const _id = this.doctor._id

    this.timetableService.getByParams({doctorId: _id}).subscribe({
      next:(value)=> this.timetable = value,
      error:(e) => console.log(e)
    })
  };


  chooseTime(time:ITimetable):void {
    time = {...time, isChecked:true}
    this.timetable = this.timetable
      .map(value => (value._id === time._id) ? time : value);
    //todo make client ID dynamically
    this.timetableService.updateTimetable('646a837e488968ecb46a7ab0', time)
      .subscribe({next:(value)=> console.log(value),
      error:(e)=> console.log(e)})
  };
}
