import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router"
import { AngularFireAuth } from 'angularfire2/auth';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  admin : boolean = false
  fullname: string

  showSidebar = true;
  constructor(public router: Router,private afAuth: AngularFireAuth,private storage: LocalStorage) { 

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

  logout(){
    this.afAuth.auth.signOut()
    this.storage.removeItem('user').subscribe(() => {});
    this.router.navigate(["/login"])
  }

}
