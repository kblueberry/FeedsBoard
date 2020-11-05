import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {error} from 'protractor';
import {catchError} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Article} from '../models/article.model';
import {Feed} from '../models/feed.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  feeds: Array<Feed> = [];

  constructor(private http: HttpClient) {}

  getFeeds() {
    return this.http.get<Array<Feed>>(`${environment.apiUrl}/feeds`);
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
