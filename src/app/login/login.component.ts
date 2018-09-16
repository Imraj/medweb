import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase'
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from "@angular/router"
import { ToastrService } from "ngx-toastr"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading = false;

  login = {
    email: "",
    pwd: ""
  }

  constructor(public db:AngularFireDatabase,public router: Router,
      public afAuth: AngularFireAuth,private toastr: ToastrService)
  {


  }

  ngOnInit() {

  }

  authenticateUser(loginForm: NgForm){
    this.loading = true

    let email = loginForm.value.email
    let pwd = loginForm.value.pwd
    this.afAuth.auth.signInWithEmailAndPassword(email,pwd).then((user)=>{
      console.log("res-show",user)
      this.loading = false
      if(user != null){
        this.router.navigate(["/"])
      }else{
        this.toastr.error("Invalid Email Address or Password","Error")
      }
     
    }).catch((res)=>{
        console.log("res-err",res)
        this.loading = false
        this.toastr.error("Invalid Email Address or Password","Error")
    });

    
  }

}
