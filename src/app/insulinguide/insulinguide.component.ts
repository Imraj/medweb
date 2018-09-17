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
  selector: 'app-insulinguide',
  templateUrl: './insulinguide.component.html',
  styleUrls: ['./insulinguide.component.css']
})
export class InsulinguideComponent implements OnInit {
  items: Observable<any[]>;
  constructor(public db:AngularFireDatabase,public router: Router,
              private toastr: ToastrService,public storage: LocalStorage) 
  {

    this.storage.getItem("user").subscribe((user)=>{
      console.log("user.sub",user.subscribe)
      if(user.subscribed == false){
        this.router.navigate(["/subscription"])
      }
    })

  }

  ngOnInit() {
    this.items = this.db.list("/insulinguides").valueChanges()
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
