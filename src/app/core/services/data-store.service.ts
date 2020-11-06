import {Injectable, OnInit} from '@angular/core';
import {Feed} from '../models/feed.model';
import {FeedService} from './feed.service';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  feedCurrent: Feed;

  feeds: Feed[];

  constructor(private feedService: FeedService) {}
}
