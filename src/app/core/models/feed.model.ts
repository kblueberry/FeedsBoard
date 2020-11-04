import {Article} from './article.model';

export interface Feed {
    'feedId': number;
    'title': string;
    'articles': Article[];
}
