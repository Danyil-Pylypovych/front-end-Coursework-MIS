import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../servises";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit, AfterViewInit {
  specialty: string;
  doctorsBySpecialty: IUser[];
  doctorId: string;
  isVisibleList: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {

  }

  ngOnInit(): void {

  };

  ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe(({specialty}) => {
        this.getDoctorBySpecialty(specialty)
    })
  };

  getDoctorBySpecialty(specialty:string): void {
    this.userService.getUsersBySpecialty(specialty).subscribe({
      next: (value) => {
        this.doctorsBySpecialty = value;
      },
      error: (e) => console.log(e)
    })
  };

  chooseList(doctorId: string): void {
    this.isVisibleList = !this.isVisibleList;
    this.doctorId = doctorId;
  }
}
