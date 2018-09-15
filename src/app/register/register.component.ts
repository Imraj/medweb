import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public db:AngularFireDatabase) { }

  ngOnInit() {

  }

  createAccount(regForm: NgForm){

    let fullname = regForm.value.fullname
    let email = regForm.value.email
    let pwd = regForm.value.pwd
    let pwd2 = regForm.value.pwd2



  }

}
