import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ITimetable, ITimetableForUpdate, IUserCard} from "../../interfaces";
import {TimetableService, UserCardService} from "../../servises";

@Component({
  selector: 'app-create-client-card',
  templateUrl: './create-client-card-modal.component.html',
  styleUrls: ['./create-client-card-modal.component.scss']
})
export class CreateClientCardModalComponent {
  timetable: ITimetable;
  form: FormGroup;
  @Output() dataUpdated: EventEmitter<null> = new EventEmitter<null>();

  constructor(public dialogRef: MatDialogRef<CreateClientCardModalComponent>,
              private userCardService: UserCardService,
              private timetableService: TimetableService,
              @Inject(MAT_DIALOG_DATA) public data: ITimetable) {
    this.timetable = data;
    this._clientCardForm()
  };

  _clientCardForm() {
    this.form = new FormGroup({
      diagnosis: new FormControl('', [Validators.required]),
      prescription: new FormControl('',),
      referral: new FormControl('',),
    })
  }

  createClientCard(userCardObj: IUserCard): void {
    this.userCardService.createUserCard(this.timetable.patientId, userCardObj).subscribe({
      next: (value) => {
        const timetableObg = {
          _id: this.timetable._id,
          isCompleted: true
        };
        this.completeTimetable(timetableObg)
        this.dialogRef.close()
        this.dataUpdated.emit(null);

      },
      error: (e) => console.log(e)
    })
  };

  completeTimetable(timetableObg: ITimetableForUpdate): void {
    this.timetableService.updateTimetableCompleted(timetableObg).subscribe({
      next: (value) => console.log(value),
      error: (e) => console.log(e)
    })
  };
}
