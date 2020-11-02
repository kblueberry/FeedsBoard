import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../core/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FeedBoard';
}
