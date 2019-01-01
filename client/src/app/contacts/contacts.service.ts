import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:Http) {
    console.log('Loading from contact service !!!');
   }

  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getContacts() {
    return this.http.get('http://localhost:3900/api/contacts');
  }

  addContacts(addC) {
    //let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', addC)
     //.map((res:Response) => res.json());
  }

  delContact(id) {
    return this.http.delete('http://localhost:3000/api/contact/'+id);
  }

}
