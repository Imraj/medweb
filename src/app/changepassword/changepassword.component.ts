import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { AngularFireDatabase,AngularFireList } from "angularfire2/database"

import * as firebase from 'firebase';
import { ToastrService } from "ngx-toastr"

import { AngularFireAuth } from 'angularfire2/auth';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from "@angular/router"

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})

export class ChangepasswordComponent implements OnInit {

  email  = "";
  pwd = "";
  credential : any

  changePwd = {
    pwd: "",
    pwd2: ""
  }

  loading = false

  admin : boolean = false
  fullname: string

  constructor(public router: Router,public toastr: ToastrService, private afAuth: AngularFireAuth,
              private storage: LocalStorage) {

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

  validateUser(){
    this.credential = firebase.auth.EmailAuthProvider.credential(this.email,this.pwd)
  }

  changePassword(){
    this.loading = true
    var app = this
    let pwd = this.changePwd.pwd;
    let pwd2 = this.changePwd.pwd2

    if(pwd != pwd2){
      this.toastr.error("Password and Password Again does not match","Error")
    }else{
     
      firebase.auth().currentUser.reauthenticateAndRetrieveDataWithCredential(this.credential)
        .then(function(){
          firebase.auth().currentUser.updatePassword(pwd)
          .then(function(){
              this.toastr.success("Password Updated Successfully","Success")
          })
          .catch(function(err){
              this.toastr.error("Error Updating Password","Error")
          })
          this.toastr.success("Password Updated Successfully","Success")

          this.loading = false

      })
      .catch(function(error){
        this.loading = false
          this.toastr.error("Error Updating Password","Error")
      })


    }
  }

  logout(){
    this.afAuth.auth.signOut()
    this.storage.removeItem('user').subscribe(() => {});
    this.router.navigate(["/login"])
  }

}
