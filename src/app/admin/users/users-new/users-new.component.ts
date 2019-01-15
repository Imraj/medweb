import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase'
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from "@angular/router"
import { ToastrService } from "ngx-toastr"
import { LocalStorage } from '@ngx-pwa/local-storage';

import { UserService } from "../shared/user.service";


@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {

  public loading = true

  newUser = {
    pwd:"",
    pwd2:""
  }

  constructor(public afAuth: AngularFireAuth,private toastr: ToastrService,
      public db:AngularFireDatabase, public userService: UserService){ 

      
  }

  ngOnInit() {

  }

  createAccount(newUserForm: NgForm){

    if(newUserForm.value.$key == null){
      firebase.auth().createUserWithEmailAndPassword(newUserForm.value.email, newUserForm.value.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("errorCode",errorCode)
        console.log("errorMessage",errorMessage)
      });
      this.userService.insertUser(newUserForm.value);
    }
    else{
      this.userService.updateUser(newUserForm.value)
    }
    this.resetForm(newUserForm)
    this.toastr.success("Account Created Successfully","Success")

  }


  resetForm(newUserForm: NgForm)
  {

    if(newUserForm!=null)
       newUserForm.reset();

    this.userService.selectedUser = {
      $key: null,
      fullname: "",
      email: ""
    }

  }

}
