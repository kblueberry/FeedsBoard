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

  addFeed(feedName) {
    return this.http.post<Feed>(`${environment.apiUrl}/feeds`, {feedId: this.generateId(), title: feedName});
  }

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
