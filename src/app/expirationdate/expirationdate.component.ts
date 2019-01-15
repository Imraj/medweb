import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase'
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from "@angular/router"
import { ToastrService } from "ngx-toastr"
import { Observable } from 'rxjs';

import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-expirationdate',
  templateUrl: './expirationdate.component.html',
  styleUrls: ['./expirationdate.component.css']
})
export class ExpirationdateComponent implements OnInit {
  items: Observable<any[]>;

  loading: boolean = false
  resShow: boolean = false
  resDate = new Date()
  resNote: string = ""
  extraDays = 0

  weekDays = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"]

  expdate = {
    medtype: "",
    medname: "",
    meddate: ""
  }

  admin : boolean = false
  fullname: string

  constructor(public db:AngularFireDatabase,public router: Router,
    public afAuth: AngularFireAuth,private toastr: ToastrService,public storage: LocalStorage)
    {
      this.items = this.db.list("/medications").valueChanges()
      
      this.storage.getItem("user").subscribe((user)=>{
        if(user != null){
          this.admin = user.admin
          this.fullname = user.fullname
        }
        else{
          this.router.navigate(["/login"])
        }
      })

    }

  ngOnInit() {

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

  calExpirationDate(){
    var app = this
    console.log("cal",this.expdate)
    if(this.expdate.meddate == null || this.expdate.medname == null || this.expdate.medtype ==null
      || this.expdate.meddate == "" || this.expdate.medname == "" || this.expdate.medtype == "" ){

      this.toastr.error("All fields are required","Missing Field")

    }else{
      this.loading = true

      let f_meddate = this.expdate.meddate
      let f_medname = this.expdate.medname
      let f_medtype = this.expdate.medtype

      this.db.list("/medications",ref=>ref.orderByChild("medName").equalTo(f_medname))
          .valueChanges()
          .subscribe(data=>{
              
              app.loading = false
              console.log("Exp-Data-web2",data,data.length)
              for(let i=0;i<data.length;i++){
                let d = data[i];
                if(d["medName"] == f_medname && d["medType"] == f_medtype){
                  console.log("correct1")
                  app.extraDays = parseInt(d["medDate"])
                  let openDay = app.expdate.meddate["day"]
                  let openMonth = app.expdate.meddate["month"]
                  let openYear = app.expdate.meddate["year"]
                  //console.log(openYear+"-"+openMonth+"-"+openDay)
                  let rDate = new Date(openYear+"-"+openMonth+"-"+openDay);
                  rDate.setDate(rDate.getDate() + app.extraDays)
                  
                  app.resDate = rDate
                  app.resNote = d["medNote"]
                  this.resShow = true
                }
                
              } 
          }) 
    }

  }

  navToContact(){
    this.router.navigate(["/contact"])
  }

  logout(){
    this.afAuth.auth.signOut()
    this.storage.removeItem('user').subscribe(() => {});
    this.router.navigate(["/login"])
  }

}
