import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Feed} from '../models/feed.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) {}

  getFeeds() {
    return this.http.get<Array<Feed>>(`${environment.apiUrl}/feeds`);
  }
}
