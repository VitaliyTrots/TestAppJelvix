import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { HttpHandlerService } from './http-handler/http-handler.service';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    UserComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [HttpHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
