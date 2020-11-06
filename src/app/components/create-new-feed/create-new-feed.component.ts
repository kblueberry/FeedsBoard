import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';
import {Feed} from 'src/app/core/models/feed.model';
import {FeedService} from 'src/app/core/services/feed.service';

@Component({
  selector: 'app-create-new-feed',
  templateUrl: './create-new-feed.component.html',
  styleUrls: ['./create-new-feed.component.css']
})
export class CreateNewFeedComponent implements OnInit {
  newFeed: FormGroup;
  @Output() feedAdd: EventEmitter<Feed> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private feedService: FeedService) {
    this.createForm();
  }

  createForm() {
    this.newFeed = this.formBuilder.group({
      title: ['', Validators.required],
      feedUrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  get form() {
    return this.newFeed.controls;
  }

  get title() {
    return this.newFeed.get('title');
  }

  get feedUrl() {
    return this.newFeed.get('feedUrl');
  }

  addNewFeed() {
    const title = this.newFeed.controls['title'].value;
    const feedUrl = this.newFeed.controls['feedUrl'].value;
    const id = new Date().getTime();

    if (!title || !feedUrl) {
      alert('Please enter feed title and URL!');
      return;
    }

    this.feedAdd.emit({id, title, feedUrl} as Feed);
    this.newFeed.reset();
  }
}
