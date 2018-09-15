import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase,AngularFireList } from "angularfire2/database";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = {
    fullname : "",
    username : '"',
    age:"",
    occupation:"",
    country : "",
    state: "",
    password: ""
  }

  constructor(public db:AngularFireDatabase) { }

  ngOnInit() {
  }

  updateProfile(){
    let fullname = this.profile.fullname;
    let username = this.profile.username;
    let age = this.profile.age
    let occupation = this.profile.occupation
    let country = this.profile.country
    let state = this.profile.state

  }

  changePassword(){
    let password = this.profile.password
  }

}
