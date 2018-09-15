import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = {
    type:"",
    subject : "",
    message : ""
  }

  constructor() { }

  ngOnInit() {
  }

  sendMessage(contactForm: NgForm){
    let  type = this.contact.type;
    let subject = this.contact.subject;
    let message = this.contact.message;

    
  }

}
