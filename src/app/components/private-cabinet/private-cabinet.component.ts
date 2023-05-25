import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {UserInfoService} from "../../servises";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-private-cabinet',
  templateUrl: './private-cabinet.component.html',
  styleUrls: ['./private-cabinet.component.scss']
})
export class PrivateCabinetComponent implements OnInit {
  isVisibleSideBar: boolean = true;
  user: IUser | null;

  constructor(private router: Router,
              private userInfoService: UserInfoService) {
  }

  ngOnInit(): void {
    this.userInfoService.getUser().subscribe(value => {
      this.user = value
    })
    if (this.router.url === '/cabinet/home') this.isVisibleSideBar = false;
  };


}
