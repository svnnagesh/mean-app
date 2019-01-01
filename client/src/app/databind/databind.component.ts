import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  user = {
    fname:'Nagesh',
    lname:'Vengal'
  }

  status = false;
  eventBindElement = false;

  constructor() { }

  ngOnInit() {
  }

  eventBind() {
    this.eventBindElement = true;
  }

}
