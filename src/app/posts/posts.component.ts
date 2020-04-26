import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  resObject;

  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getData()
      .subscribe(Response => {
        this.resObject=Response
      })
  }

}
