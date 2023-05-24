import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {AuthService, UserInfoService} from "../../servises";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user:IUser | null
  isHome:boolean = false

  constructor(private userInfoService:UserInfoService,
              private router:Router,
              private authService:AuthService) {
  }

  ngOnInit(): void {
    if (this.router.url === '/cabinet/home') this.isHome = true;

    this.userInfoService.getUser().subscribe({
      next:(value) => {
        this.user = value
        if (this.router.url === '/index' && value !== null){
          this.router.navigate(['/cabinet/home'])
        }
          },
      error:(e)=> console.log(e)

    })
  }

  logout() {
    this.authService.logout()
  }
}
