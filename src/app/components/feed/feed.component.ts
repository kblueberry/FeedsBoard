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

  constructor(private dataStore: DataStoreService, private feedService: FeedService) {
  }

  ngOnInit(): void {
  }

  storeFeedInformation() {
    this.dataStore.feedCurrent = this.feed;
  }

  deleteFeed() {
    this.feedService.deleteFeed(this.feed.id).subscribe(() => {
      console.log(`Feed with id = ${this.feed.id} deleted`);
      let indexOfFeed = this.dataStore.feeds.indexOf(this.feed);
      this.dataStore.feeds.splice(indexOfFeed, 1);
    },
      error => console.log(`An error occured while processing this request!`));
  }
}

