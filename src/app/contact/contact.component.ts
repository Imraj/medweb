import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { Router } from "@angular/router"

import { HttpClient } from '@angular/common/http'
import { HttpParams } from "@angular/common/http"

import { ToastrService } from "ngx-toastr"
import { LocalStorage } from '@ngx-pwa/local-storage';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public loading = false;

  contact = {
    type:"App Feedback",
    subject : "",
    message : ""
  }
  from : string = ""

  admin : boolean = false
  fullname: string
  constructor(public router: Router,public http: HttpClient, public toastr: ToastrService,
    public storage: LocalStorage,private afAuth: AngularFireAuth) {

      this.storage.getItem("user").subscribe((user)=>{
        if(user != null){
          this.admin = user.admin
          this.fullname = user.fullname
        }
        else{
          this.router.navigate(["/login"])
        }
      })

  }

  ngOnInit() {
  }

  sendMessage(contactForm: NgForm){

    console.log("Sending Message ...")
    this.loading = true

    this.storage.getItem("user").subscribe((user)=>{
      this.from = user.email

      let  type = this.contact.type;
      let subject = this.contact.subject;
      let message = this.contact.message;
      let from = this.from
  
      const params = new HttpParams().set("type",type).set("subject",subject)
                                     .set("message",message)
                                     .set("from",from)
  
      this.http.get("http://medexp.000webhostapp.com/contact.php",{params})
          .subscribe(
            data => {
               this.loading = false
               this.toastr.success("Message Sent","Success")
            },
            error => {
                this.loading = false
                console.log("sending msg error:")
                console.log(error)
                this.toastr.error("Error sending message", "Error")
            }
          )
    })

   
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

  logout(){
    this.afAuth.auth.signOut()
    this.storage.removeItem('user').subscribe(() => {});
    this.router.navigate(["/login"])
  }

}
