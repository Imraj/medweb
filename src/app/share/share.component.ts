import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http"

import { Router } from "@angular/router"
import {NgForm} from "@angular/forms"

import { ToastrService } from "ngx-toastr"
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {


  share = {
    email1:"",
    email2:"",
    email3:"",
    message: ""
  }

  admin: string
  fullname: string

  constructor(public http: HttpClient,public router: Router,public toastr: ToastrService,protected storage: LocalStorage) 
  {
    this.storage.getItem("user").subscribe((user)=>{
      if(user != null){
        this.admin = user.admin
        this.fullname = user.fullname
      }else{
        this.router.navigate(["/login"])
      }
    })
  }

  ngOnInit() {
  }

  shareEmail(shareForm: NgForm){
    let email1 = this.share.email1
    let email2 = this.share.email2
    let email3 = this.share.email3
    let message = this.share.message

    const params = new HttpParams().set("email1",email1)
                                   .set("email2",email2)
                                   .set("message",message)
                                   .set("email3",email3)
  
    this.http.get("http://medexp.000webhostapp.com/share.php",{params})
        .subscribe(
          data => {
              this.toastr.success("Message Sent","Success")
          },
          error => {
              console.log("sending msg error:")
              console.log(error)
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
