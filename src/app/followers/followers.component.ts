import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  username;
  fullDateStamp = new Date();

  constructor() { }

  ngOnInit() {
  }

}
