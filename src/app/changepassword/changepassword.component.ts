import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"

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
