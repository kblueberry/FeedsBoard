import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Feed} from '../models/feed.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  feedCurrent: Feed;

  constructor() {}
}
