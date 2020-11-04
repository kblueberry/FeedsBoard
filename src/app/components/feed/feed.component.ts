import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Article} from 'src/app/core/models/article.model';
import {Feed} from 'src/app/core/models/feed.model';
import {JSONFeed} from 'src/app/core/models/JSON-feed.model';
import {FeedService} from 'src/app/core/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @Input() feed: Feed;
  feedArticles: Article[];
  jsonFeed: JSONFeed;

  constructor(private feedService: FeedService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}
}
