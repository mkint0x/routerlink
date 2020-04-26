import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetStatsService {
  url = 'https://doh.saal.ai/api/live';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }
}
