import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms"
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase'
import { auth } from 'firebase';
import { Router } from "@angular/router"
import { ToastrService } from "ngx-toastr"
import { Observable } from 'rxjs';

import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-recalls',
  templateUrl: './recalls.component.html',
  styleUrls: ['./recalls.component.css']
})
export class RecallsComponent implements OnInit {


  items: Observable<any[]>;
  admin: string
  fullname: string

  constructor(public db:AngularFireDatabase, public router: Router,public storage: LocalStorage) 
  {
    //Check if user is a subscribed member from storage
    this.storage.getItem("user").subscribe((user)=>{
      if(user.subscribed == false){
        this.router.navigate(["/subscription"])
      }
    })

    this.storage.getItem("user").subscribe((user)=>{
      if(user != null){
        this.admin = user.admin
        this.fullname = user.fullname
      }else{
        this.router.navigate(["/login"])
      }
    })

  }

  ngOnInit() {
    this.items = this.db.list("/recalls").valueChanges()
  }

  navToExpirationdate(){
    this.router.navigate(["/expirationdate"])
  }

  navToInsulin(){
    this.router.navigate(["/insulinguide"])
  }

  navToRecall(){
    this.router.navigate(["/recalls"])
  }

}
