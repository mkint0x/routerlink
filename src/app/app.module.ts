import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { NgpSortModule } from 'ngp-sort-pipe'

import { AppComponent } from './app.component';
import { FollowersComponent } from './followers/followers.component';
import { PostsComponent } from './posts/posts.component';
import { NavComponent } from './nav/nav.component';
import { CoronaSatsComponent } from './corona-sats/corona-sats.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowersComponent,
    PostsComponent,
    NavComponent,
    CoronaSatsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: FollowersComponent},
      { path: 'start', component: FollowersComponent},
      { path: 'posts', component: PostsComponent},
      { path: 'corona', component: CoronaSatsComponent},
      { path: '**', component: NotFoundComponent}
    ]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgpSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
