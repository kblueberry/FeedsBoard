import {Component, Input, OnInit} from '@angular/core';
import {Article} from 'src/app/core/models/article.model';
import {Feed} from 'src/app/core/models/feed.model';
import {FeedService} from 'src/app/core/services/feed.service';

@Component({
  selector: 'app-feed-article',
  templateUrl: './feed-article.component.html',
  styleUrls: ['./feed-article.component.css']
})
export class FeedArticleComponent implements OnInit {
  articles: Article[];
  @Input() feed: Feed;

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {}

  fetchArticles(siteUrl) {
    this.feedService.fetchFeedArticles(siteUrl).subscribe(results => {
      this.articles = results;
    });
  }

}
