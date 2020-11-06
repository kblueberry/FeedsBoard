import {Component, Input, OnInit} from '@angular/core';

import {Article} from 'src/app/core/models/article.model';
import {Feed} from 'src/app/core/models/feed.model';
import {DataStoreService} from 'src/app/core/services/data-store.service';
import {FeedService} from 'src/app/core/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @Input() feed: Feed;
  feedArticles: Article[];
  feeds: Feed[];

  constructor(private dataStore: DataStoreService, private feedService: FeedService) {
  }

  ngOnInit(): void {
  }

  storeFeedInformation() {
    this.dataStore.feedCurrent = this.feed;
  }

  //this functionality was not fully realized 

  deleteFeed() {
    this.feedService.deleteFeed(this.dataStore.feedCurrent.feedId).subscribe(deleted => {
      this.feed = deleted;
    });
  }
}

