import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

/** Import des components */
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';

/** Import des services */
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BooksService } from './services/books.service';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuardService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
