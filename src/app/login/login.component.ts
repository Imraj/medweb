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
      public afAuth: AngularFireAuth,private toastr: ToastrService,
      protected storage: LocalStorage)
  {


  }

  ngOnInit() {

    this.storage.getItem("user").subscribe((user)=>{
      if(user != null){
        this.router.navigate(["/"])
      }
    })

  }

  authenticateUser(loginForm: NgForm){
    var app = TouchList
    this.loading = true

    let email = loginForm.value.email
    let pwd = loginForm.value.pwd
    this.afAuth.auth.signInWithEmailAndPassword(email,pwd).then((user)=>{
      this.loading = false
      if(user != null){
        this.router.navigate(["/"])
      }else{
        this.toastr.error("Invalid Email Address or Password","Error")
      }

      const profile = this.db.list("/profiles", ref=> ref.orderByChild("email").equalTo(email)).valueChanges()
            profile.subscribe(data => {
            
              let user = {"age":data[0]["age"],
                          "admin":data[0]["admin"],
                          "email":data[0]["email"],
                          "ethnicity":data[0]["ethnicity"],
                          "fullname":data[0]["fullname"],
                          "gender":data[0]["gender"],
                          "occupation":data[0]["occupation"],
                          "state":data[0]["state"],
                          "country":data[0]["country"],
                          "subscribed":data[0]["subscribed"],
                          "subscribed_date":data[0]["subscribed_date"]
              }
              console.log("str-user",user)
              this.storage.setItem("user",user).subscribe(()=>{})

            },err=>{
              console.log("Err")
              console.log(err)
            });
     
    }).catch((res)=>{
        console.log("res-err",res)
        this.loading = false
        this.toastr.error("Invalid Email Address or Password","Error")
    });

    
  }

}
