import { Component, OnInit } from '@angular/core';
import { GetuserameService } from '../getuserame.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private users: GetuserameService) { }
  public username: any = [];
  ngOnInit(): void {
    this.username = this.users.user;
  }

}
