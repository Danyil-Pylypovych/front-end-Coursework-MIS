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

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.activatedRoute.queryParams.subscribe((params) => this.specialty = params['specialty'])

  }

  ngOnInit(): void {
    this.getDoctorBySpecialty();
  };

  ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe(({specialty}) => {
        console.log(specialty)
      if (specialty !== this.specialty) {
        this.getDoctorBySpecialty();
      }

    })
  };

  getDoctorBySpecialty():void {
    this.userService.getUsersByParams({specialty: this.specialty}).subscribe({
      next: (value) => {
        this.doctorsBySpecialty = value;
      },
      error: (e) => console.log(e)
    })
  };
}
