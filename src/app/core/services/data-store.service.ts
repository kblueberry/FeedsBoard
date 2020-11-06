import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Feed} from '../models/feed.model';
import {FeedService} from './feed.service';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  feedCurrent: Feed;

  feeds: Feed[];

  constructor(private feedService: FeedService) {}

  storeFeeds() {
    this.feedService.getFeeds().subscribe(results => {
      this.feeds = results;
    });
  }
}
