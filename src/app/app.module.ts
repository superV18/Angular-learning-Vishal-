import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { VishalComponent } from './vishal/vishal.component';

@NgModule({
  declarations: [AppComponent, VishalComponent],
  imports: [BrowserModule, AppRoutingModule, UserAuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
