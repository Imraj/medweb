import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: "",
    pwd: ""
  }

  constructor(public db:AngularFireDatabase) { }

  ngOnInit() {

  }

  authenticateUser(loginForm: NgForm){
    let email = loginForm.value.email
    let pwd = loginForm.value.password


  }

}
