import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { DisplayComponent } from './display/display.component';
import { DatabaseComponent } from './database/database.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DisplayComponent,
    DatabaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'display', component: DisplayComponent },
      { path: 'database', component: DatabaseComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
