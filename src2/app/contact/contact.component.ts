import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { Router } from "@angular/router"

import { HttpClient } from '@angular/common/http'
import { HttpParams } from "@angular/common/http"

import { ToastrService } from "ngx-toastr"
import { LocalStorage } from '@ngx-pwa/local-storage';

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
  from : string = ""

  constructor(public router: Router,public http: HttpClient, public toastr: ToastrService,
    public storage: LocalStorage) { }

  ngOnInit() {
  }

  sendMessage(contactForm: NgForm){

    this.storage.getItem("user").subscribe((user)=>{
      this.from = user.email
    })

    let  type = this.contact.type;
    let subject = this.contact.subject;
    let message = this.contact.message;
    let from = this.from

    const params = new HttpParams().set("type",type).set("subject",subject)
                                   .set("message",message).set("from",from)
    this.http.get("http://medexpiration.com/contact.php",{params})
        .subscribe(
          data => {
             this.toastr.success("Message Sent","Success")
          },
          error => {
              this.toastr.error("Error sending message", "Error")
          }
        )
    

    
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
