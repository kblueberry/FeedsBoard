import {Component, Input, OnInit} from '@angular/core';

import {Article} from 'src/app/core/models/article.model';
import {Feed} from 'src/app/core/models/feed.model';
import {DataStoreService} from 'src/app/core/services/data-store.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @Input() feed: Feed;
  feedArticles: Article[];

  constructor(private dataStore: DataStoreService) {
  }

  ngOnInit(): void {
  }

  storeFeedInformation() {
    this.dataStore.feedCurrent = this.feed;
  }
}

