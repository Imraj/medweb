import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { AngularFireDatabase,AngularFireList } from "angularfire2/database"

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})

export class ChangepasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  changePassword(changePwd: NgForm){
    let pwd = changePwd.value.pwd
    let pwd2 = changePwd.value.pwd2


  }

}
