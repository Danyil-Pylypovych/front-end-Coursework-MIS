import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-private-cabinet',
  templateUrl: './private-cabinet.component.html',
  styleUrls: ['./private-cabinet.component.scss']
})
export class PrivateCabinetComponent implements OnInit {
  isVisibleSideBar: boolean = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (this.router.url === '/cabinet/home') this.isVisibleSideBar = false
  }


}
