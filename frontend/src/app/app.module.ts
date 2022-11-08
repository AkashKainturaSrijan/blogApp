import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './admin/components/overview/overview.component';
import { AllBlogEntriesComponent } from './components/blog-entry/all-blog-entries/all-blog-entries/all-blog-entries.component';
import { CreateBlogEntryComponent } from './components/blog-entry/create-blog-entry/create-blog-entry/create-blog-entry.component';
import { ViewBlogEntryComponent } from './components/blog-entry/view-blog-entry/view-blog-entry/view-blog-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    AllBlogEntriesComponent,
    CreateBlogEntryComponent,
    ViewBlogEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
