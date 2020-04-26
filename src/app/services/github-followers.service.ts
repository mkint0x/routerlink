import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {
  url='https://api.github.com/users';

  constructor( private http: HttpClient) { }

  getData() {
    return this.http.get(this.url,{reportProgress:true});
  }
}
