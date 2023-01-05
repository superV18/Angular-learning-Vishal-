import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { VishalComponent } from './vishal/vishal.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [AppComponent, VishalComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, UserAuthModule, FormsModule, BrowserAnimationsModule, MatSlideToggleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
