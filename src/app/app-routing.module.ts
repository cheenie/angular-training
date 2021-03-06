import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {UsersComponent} from './components/users/users.component';
import {NotFoundComponent} from './components/not-found/not-found.component';



@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'post/:id',
        component: PostComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  declarations: []
})
export class AppRoutingModule { }
