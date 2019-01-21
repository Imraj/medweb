import { Component, OnInit } from '@angular/core';

import { Router  } from "@angular/router"
import { LocalStorage } from '@ngx-pwa/local-storage';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showSidebar = true;
  admin: string
  fullname: string
  
  constructor(private router: Router, protected storage: LocalStorage,private afAuth: AngularFireAuth) { 

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

  navToExp(){
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
