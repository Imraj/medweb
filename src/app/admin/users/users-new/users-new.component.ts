import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase'
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from "@angular/router"
import { ToastrService } from "ngx-toastr"
import { LocalStorage } from '@ngx-pwa/local-storage';


@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {

  public loading = true

  constructor(public afAuth: AngularFireAuth,private toastr: ToastrService,
      public db:AngularFireDatabase){ 

      
  }

  ngOnInit() {

  }

  createAccount(regForm: NgForm){

    this.loading = true

    let fullname = regForm.value.fullname
    let email = regForm.value.email
    let pwd = regForm.value.pwd
    let pwd2 = regForm.value.pwd2

    this.afAuth.auth.createUserWithEmailAndPassword(email,pwd)
        .then((user)=>{
          this.loading = false
          this.db.list("/profile").push({
            admin: false,
            age: "",
            country: "",
            email: email,
            ethnicity: "",
            fullname: fullname,
            gender: "",
            occupation: "",
            state: "",
            subscribed: false,
            subscribed_date: ""
          })
          this.toastr.success("Account created successfully","Success")
        })
        .catch((err)=>{
            this.loading = false
            this.toastr.error("Error creating account","Error")
        })

  }


}
