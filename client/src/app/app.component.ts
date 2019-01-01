import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, Subject, interval, observable, Observer, Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  numOfSub:Subscription;
  customObsSub:Subscription;

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    myNumbers.subscribe((number:number)=> {
      //console.log(number)
    })

    // observer:Observer<datatype should be same while calling next>
    const myObs = Observable.create((observer:Observer<string>) => {
      setTimeout(()=> {
        observer.next('first package');
      }, 2000);
      setTimeout(()=> {
        observer.next('second package');
      }, 4000);
      setTimeout(()=> {
        observer.error('error');
      }, 5000);
      setTimeout(()=> {
        observer.complete();
      }, 6000);
    })

    myObs.subscribe(
      (data) => { console.log(data) },
      (error) => { console.log(error) },
      () => { console.log('completed') }
    )
    const myObservable = Observable.of(1,2,3,4,5);
    /* const myObserver = {
      next: x => console.log('next value : ' + x),
      error: err => console.log('error value : ' + err),
      complete: () => console.log('notification completed')
    } 
    myObservable.subscribe(myObserver);
    */
    myObservable.subscribe(
      (x) => console.log('next value : ' + x),
      (err) => console.log('error value : ' + err),
      () => console.log('notification completed')
    );

  }

  ngOnDestroy() {
    this.numOfSub.unsubscribe();
    this.customObsSub.unsubscribe();
  }

}
