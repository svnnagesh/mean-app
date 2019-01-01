import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IBooks, ContList } from './books';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class BooksComponent implements OnInit {

  books:IBooks[];
  errorMsg:string;
  contacts:ContList[];


  constructor(private bookService:BooksService) { }

  ngOnInit() {
    this.getRegContacts();
  }

  getRegContacts() {
    this.bookService.getRegContacts().subscribe(
      (data)=> {
        this.contacts = data;
        console.log('========================= new contacts :', data);
      },
      (error) => {
        this.errorMsg = error;
        console.log('========================= error :', error);
      }
    )
  }

}
