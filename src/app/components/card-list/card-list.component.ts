import {Component, OnInit} from '@angular/core';
import {IUser, IUserCard} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {UserCardService, UserInfoService} from "../../servises";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  isFullPeriod: boolean;
  userCards: IUserCard[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private userCardService: UserCardService,
              private userInfoService: UserInfoService) {
    this.activatedRoute.queryParams
      .subscribe((params) => {
        if (params['period'] === 'Last visit') this.isFullPeriod = false;
        if (params['period'] === 'All history') this.isFullPeriod = true;
      })
  };

  ngOnInit(): void {
    this.userInfoService.getUser().subscribe(value => {
      if (value !== null) {
        this.getCards(value._id)
      }
    })
  };

  getCards(_id:string): void {
    this.userCardService.getAllUserCardsByUserId(_id).subscribe({
      next: (value) => {
        this.userCards = value
      }, error: (e) => console.log(e)
    })
  }
}
