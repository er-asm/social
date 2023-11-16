import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeftVerticalMenuComponent } from './left-vertical-menu/left-vertical-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { CreatePostComponent } from './main/create-post/create-post.component';
import { PostAreaComponent } from './main/post-area/post-area.component';
import { UtilityAreaComponent } from './utility-area/utility-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftVerticalMenuComponent,
    NavbarComponent,
    MainComponent,
    CreatePostComponent,
    PostAreaComponent,
    UtilityAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
