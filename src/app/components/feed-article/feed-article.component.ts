import {Component, Input, OnInit} from '@angular/core';
import {Article} from 'src/app/core/models/article.model';

@Component({
  selector: 'app-feed-article',
  templateUrl: './feed-article.component.html',
  styleUrls: ['./feed-article.component.css']
})
export class FeedArticleComponent implements OnInit {
  @Input() articles: Article[];

  constructor() {}

  ngOnInit(): void {
  }

}
