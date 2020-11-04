import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Feed} from 'src/app/core/models/feed.model';
import {AuthService} from 'src/app/core/services/auth.service';
import {FeedService} from 'src/app/core/services/feed.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  feeds: Array<Feed>;

  constructor(private authService: AuthService, private router: Router, private feedService: FeedService) {}

  ngOnInit(): void {
    this.fetchFeeds();
  }

  userLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  fetchFeeds() {
    this.feedService.getFeeds().subscribe((fetchedFeeds: Feed[]) => {
      this.feeds = fetchedFeeds;
    });
  }
}
