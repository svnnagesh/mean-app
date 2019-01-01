import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './contacts/contacts.service';
import { BooksService } from './books/books.service';
import { ShortPipe } from './short.pipe';
import { BooksComponent } from './books/books.component';
import { DatabindComponent } from './databind/databind.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ShortPipe,
    BooksComponent,
    DatabindComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ContactsService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
