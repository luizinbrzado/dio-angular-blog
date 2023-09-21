import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ApresentationComponent } from './components/apresentation/apresentation.component';
import { FilterPageComponent } from './components/filter-page/filter-page.component';
import { BestPostComponent } from './components/best-post/best-post.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { SmallCardComponent } from './components/small-card/small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ApresentationComponent,
    FilterPageComponent,
    BestPostComponent,
    AboutMeComponent,
    NewsletterComponent,
    PostsComponent,
    HomeComponent,
    FooterBarComponent,
    SmallCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
