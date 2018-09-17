import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { Router } from "@angular/router"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = {
    type:"App Feedback",
    subject : "",
    message : ""
  }

  constructor(public router: Router) { }

  ngOnInit() {
  }

  sendMessage(contactForm: NgForm){
    let  type = this.contact.type;
    let subject = this.contact.subject;
    let message = this.contact.message;

    
  }

  navToExpirationdate(){
    this.router.navigate(["/expirationdate"])
  }

  navToInsulin(){
    this.router.navigate(["/insulinguide"])
  }

  navToRecall(){
    this.router.navigate(["/recalls"])
  }


}
