import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"

import * as firebase from 'firebase';
import { ToastrService } from "ngx-toastr"

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  pwd = {
    email:""
  }
  
  public loading = false;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {

  }

  retrievePwd(pwdForm: NgForm){
    this.loading = true

    let email = pwdForm.value.email;
    firebase.auth().sendPasswordResetEmail(email)
            .then(()=>{
                this.loading = false
                this.toastr.success("Password Reset Email Sent to Email Address","Success")
            })
            .catch((error)=>{
                this.loading = false
                this.toastr.error("Please try again later","Error")
            })
  }

}
