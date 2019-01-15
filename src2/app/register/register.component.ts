import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from "@angular/router"
import { ToastrService } from "ngx-toastr"
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public loading = false;

  reg = {
    fullname:"",
    email:"",
    pwd:"",
    pwd2:""
  }

  constructor(public db:AngularFireDatabase,public router: Router,
              public afAuth: AngularFireAuth,private toastr: ToastrService,
              protected storage: LocalStorage) { }

  ngOnInit() {
    this.storage.getItem("user").subscribe((user)=>{
      if(user != null){
        this.router.navigate(["/"])
      }
    })
  }

}
