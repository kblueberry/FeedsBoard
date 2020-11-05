import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {error} from 'protractor';
import {catchError} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Article} from '../models/article.model';
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

  fetchFeedArticles(url) {
    return this.http.get<Array<Article>>(url);
  }

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  fetchFeedById(id) {
    return this.http.get<Feed>(`${environment.apiUrl}/feeds?feedId=${id}`);
  }
}
