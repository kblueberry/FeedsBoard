import {Article} from './article.model';

export interface JSONFeed {
    'title': 'string';
    'feed_url': 'string';
    'items': Article[];
}
