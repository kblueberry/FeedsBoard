import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {Article} from 'src/app/core/models/article.model';
import {Feed} from 'src/app/core/models/feed.model';
import {DataStoreService} from 'src/app/core/services/data-store.service';
import {FeedService} from 'src/app/core/services/feed.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[];
  feed: Feed;
  feedSubscription: Subscription;
  articlesSubscription: Subscription;

  constructor(private feedService: FeedService, private store: DataStoreService) {}

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles() {
    this.articlesSubscription = this.feedService.fetchFeedArticles(this.store.feedCurrent.feedId).subscribe(results => {
      this.articles = results;
    },
      (error: HttpErrorResponse) => {
        alert(`An error ${error.status} occured: ${error.message}`);
      },
      () => {});
  }
}
