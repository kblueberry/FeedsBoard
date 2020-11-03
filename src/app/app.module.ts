import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './components/app.component';
import {LoginComponent} from './components/login/login.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import { FeedComponent } from './components/feed/feed.component';
import { FeedArticleComponent } from './components/feed-article/feed-article.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    FeedComponent,
    FeedArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
