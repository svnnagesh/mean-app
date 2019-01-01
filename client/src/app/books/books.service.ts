import { Injectable } from '@angular/core';
import { ContList } from './books';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:Http) { }

  /* getBooks():Observable<IBooks[]> {
    return this.http.get('/api/books.json')
    .map((response:Response) => <IBooks[]> response.json());
  } */

  getRegContacts():Observable<ContList[]> {
    return this.http.get('http://localhost:3900/api/contacts')
    .map((response:Response) => <ContList[]>response.json())
    .do(data => console.log(data))
    .catch(this.handleError);
  }

  private handleError(error:Response) {
    console.error(error);
    let message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }

}
