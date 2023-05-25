import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TimetableService, UserInfoService} from "../../servises";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-create-timetable-modal',
  templateUrl: './create-timetable-modal.component.html',
  styleUrls: ['./create-timetable-modal.component.scss']
})
export class CreateTimetableModalComponent implements OnInit {
  form: FormGroup;
  user: IUser | null;
  error: boolean = false;
  isDayChecked: boolean;
  checkedDay: string;
  checkedHours: Array<string> = [];
  hoursArr: Array<string> = ['9.00', '9.30', '10.00', '10.30', '11.00', '11.30', '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00']

  constructor(private dialogRef: MatDialogRef<CreateTimetableModalComponent>,
              private router: Router,
              private timetableService: TimetableService,
              private userInfoService: UserInfoService) {
    this._timetableForm()
  };


  ngOnInit(): void {
    this.getUser()
  };

  getUser(): void {
    this.userInfoService.getUser().subscribe(value => this.user = value)
  };

  _timetableForm(): void {
    this.form = new FormGroup({
      day: new FormControl('', [Validators.required]),
    })
  }

  closeTimetable(): void {
    this.dialogRef.close();
    this.router.navigate(['/cabinet/doctorTimetable'])
  };

  onDayChecked(): void {
    this.isDayChecked = true;

    const date = new Date(this.form.get('day')!.value);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    this.checkedDay  = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    this.form.setValue({day:this.checkedDay })
  };

  onChooseTime(hour: string) {
    this.checkedHours.push(hour)
    this.createTimetable(this.checkedDay, hour)
  };

  createTimetable(day: string, time: string): void {
    if (this.user) {
      const timetableObj = {
        doctorId: this.user._id,
        day,
        time,
      }
      this.timetableService.createTimetable(timetableObj).subscribe({
        next: (value) => console.log(value)
        , error: (e) => console.log(e)
      });
    }
  };
}
