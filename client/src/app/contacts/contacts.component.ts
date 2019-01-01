import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validator, FormBuilder, Validators, FormArray } from '@angular/forms';

import { ContactsService } from './contacts.service';
import { Contact } from './contact'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ContactsComponent implements OnInit {

  name:'asdfasfasd';
  defaultSelect = 'one';

  myPosts:any;
  myContacts:Contact[];
  user:FormGroup;
  contacts:any;

  first_name:string;
  last_name:string;
  phone:string;
  hobbies:string;

  constructor(private contactService:ContactsService, private formBuild:FormBuilder) { 
    //this.addContact();
    
    /* this.user = formBuild.group({
      first_name:['', Validators.required],
      last_name:['', Validators.required],
      phone:['', Validators.required]
    }) */
  }

  ngOnInit() {

    this.contactValidation();
    this.getContactsPost();
    this.getContacts();

  }

  getContactsPost() {
    this.contactService.getPost().subscribe(success => {
      this.myPosts = success.json();
      console.log('asdfasdfsaf', success)
    });
  }

  getContacts() {
    this.contactService.getContacts().subscribe(success => {
      this.myContacts = success.json();
      console.log('my contacts : ', success);
    })
    //this.contactService.getContacts().toPromise();
  }

  contactValidation() {
    this.user = new FormGroup({
      'first_name': new FormControl('', Validators.required),
      'last_name': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required),
      'hobbies': new FormArray([])
    })
  }

  hobby() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.user.get('hobbies')).push(control);
  }

  deleteContact(id) {
    this.contactService.delContact(id).subscribe(success => {
      alert('Contact has been deleted !!!');
      this.getContacts();
    })
  }

  addContact(contacts) {
    this.contactService.addContacts(contacts).subscribe(success => {
      console.log('===========>', contacts);
      this.getContacts();
      this.user.reset();
    })
  }

}
