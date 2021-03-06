import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FollowersComponent } from './followers/followers.component';
import { PostsComponent } from './posts/posts.component';
import { NavComponent } from './nav/nav.component';
import { CoronaSatsComponent } from './corona-sats/corona-sats.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GetStatsService } from './services/get-stats.service';
import { GithubFollowersService } from './services/github-followers.service';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowersComponent,
    PostsComponent,
    NavComponent,
    CoronaSatsComponent,
    NotFoundComponent,
    GithubProfileComponent,
    HomeComponent,
  ],
  imports: [
  BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'start', component: FollowersComponent},
      { path: 'posts/:id/:username', component: GithubProfileComponent },
      { path: 'posts', component: PostsComponent},
      { path: 'corona', component: CoronaSatsComponent},
      { path: '**', component: NotFoundComponent}
    ]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    GetStatsService,
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
