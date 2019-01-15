import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { AngularFireDatabase,AngularFireList } from "angularfire2/database"

import * as firebase from 'firebase';
import { ToastrService } from "ngx-toastr"

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

  constructor(public toastr: ToastrService) { }

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

}
