import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms"
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase'
import { auth } from 'firebase';
import { Router } from "@angular/router"
import { ToastrService } from "ngx-toastr"
import { Observable } from 'rxjs';

import { LocalStorage } from '@ngx-pwa/local-storage';

import { CompleterService, CompleterData } from 'ng2-completer'
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-insulinguide',
  templateUrl: './insulinguide.component.html',
  styleUrls: ['./insulinguide.component.css']
})
export class InsulinguideComponent implements OnInit {

  loading: boolean = false

  resShow: boolean = false
  notResShow: boolean = false

  resDate  = new Date()
  resNote : string = ""
  extraDays = 0

  insulin = {
    brand: "",
    date:""
  }

  admin: string
  fullname: string

  brands: String[] = [];
  brandplaceholder : string;

  items: Observable<any[]>;
  constructor(public db:AngularFireDatabase,public router: Router,
              private toastr: ToastrService,public storage: LocalStorage,
              public completerService: CompleterService,private afAuth: AngularFireAuth) 
  {

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

    this.brandplaceholder = "Brand / Generic"

    db.list("insulinguides").valueChanges()
    .subscribe((snapshot)=>{
      snapshot.forEach(element => {
         const mObject = <any>element
         this.brands.push( mObject.brand )
      })
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

  calInsulinGuide(){
    var app = this
    if(this.insulin.brand == "" || this.insulin.date ==""
    || this.insulin.brand == null || this.insulin.date == null )
    {
      this.toastr.error("All fields are required","Missing Field")
    }else{
      this.loading = true
      

      let f_brand = this.insulin.brand
      let f_date = this.insulin.date

      console.log("this.insulin",this.insulin)

      this.db.list("/insulinguides",ref=>ref.orderByChild("brand").equalTo(f_brand))
          .valueChanges()
          .subscribe(data=>{
              this.loading = false
              //console.log("Ins-Data-web",data,data[0])

              app.loading = false
              
              for(let i=0;i<data.length;i++){
                  let d = data[i];
                
                  console.log("d-res",d)
                  app.extraDays = parseInt(d["date"])

                  if(app.extraDays < 0){

                    app.resNote = d["note"]
                    this.notResShow = true

                  }else{
                    let openDay = app.insulin.date["day"]
                    let openMonth = app.insulin.date["month"]
                    let openYear = app.insulin.date["year"]
                    //console.log(openYear+"-"+openMonth+"-"+openDay)
                    let rDate = new Date(openYear+"-"+openMonth+"-"+openDay);
                    rDate.setDate(rDate.getDate() + app.extraDays)
                    console.log("rDate",rDate)
                    app.resDate = rDate
                    app.resNote = d["note"]
                    console.log("d[note]",d["note"])
                    this.resShow = true
                  }

                  
                
                
            } 
          })

    }
   

  }

  logout(){
    this.afAuth.auth.signOut()
    this.storage.removeItem('user').subscribe(() => {});
    this.router.navigate(["/login"])
  }

}
