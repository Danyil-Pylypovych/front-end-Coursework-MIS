import {Component, Input, OnInit} from '@angular/core';
import {IUser, IUserCard} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {UserCardService} from "../../servises";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit{
  isFullPeriod:boolean;
  userCards:IUserCard[]

constructor(private activatedRoute: ActivatedRoute,
            private userCardService:UserCardService) {
  this.activatedRoute.queryParams
    .subscribe((params) => {
       if(params['period'] === 'Last visit') this.isFullPeriod = false;
       if(params['period'] === 'All history') this.isFullPeriod = true;
    })
};

  ngOnInit(): void {
    this.getCards()
  };

  getCards():void  {
    //todo get user ID dynamically
    this.userCardService.getAllUserCardsByUserId('646ccc6faccef02d9b3e806c').subscribe({
      next:(value)=> {
        this.userCards = value
        console.log(value)
      },error:(e) => console.log(e)
    })
}
}
