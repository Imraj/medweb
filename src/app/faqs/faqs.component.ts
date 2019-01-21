import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { LocalStorage } from '@ngx-pwa/local-storage';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  items: Observable<any[]>;

  admin : boolean = false
  fullname: string

  constructor(public db:AngularFireDatabase,public router: Router,private afAuth: AngularFireAuth,private storage: LocalStorage)
  {
      this.items = this.db.list("/faqs").valueChanges()

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

  logout(){
    this.afAuth.auth.signOut()
    this.storage.removeItem('user').subscribe(() => {});
    this.router.navigate(["/login"])
  }

}
